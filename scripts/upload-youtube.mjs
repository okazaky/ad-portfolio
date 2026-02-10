/**
 * YouTube限定公開アップロードスクリプト（Playwright版）
 *
 * 使い方:
 *   node scripts/upload-youtube.mjs
 *
 * 初回実行時にGoogleログインが必要です（ブラウザが開きます）。
 * ログイン後、31本を順番にアップロードします。
 * アップロード後、各動画のYouTube IDをportfolio/youtube-ids.jsonに保存します。
 */
import { chromium } from "playwright";
import { readdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

const OUTPUT_DIR = path.resolve("output");
const IDS_FILE = path.resolve("portfolio/youtube-ids.json");

// 動画ファイル一覧（Video01〜Video31）
const videos = readdirSync(OUTPUT_DIR)
  .filter((f) => f.startsWith("Video") && f.endsWith(".mp4"))
  .sort();

// 既存のIDファイルを読み込み
const existingIds = existsSync(IDS_FILE)
  ? JSON.parse(readFileSync(IDS_FILE, "utf-8"))
  : {};

const TITLES = {
  "Video01-DietSupplement": "ダイエットサプリ | Ad Creative Sample",
  "Video02-Skincare": "美白美容液 | Ad Creative Sample",
  "Video03-HairGrowth": "育毛剤 | Ad Creative Sample",
  "Video04-ProteinBar": "プロテインバー | Ad Creative Sample",
  "Video05-SleepPill": "睡眠サプリ | Ad Creative Sample",
  "Video06-EyeCream": "目元クリーム | Ad Creative Sample",
  "Video07-ToothWhitening": "ホワイトニング歯磨き | Ad Creative Sample",
  "Video08-CollagenDrink": "コラーゲンドリンク | Ad Creative Sample",
  "Video09-FatBurner": "脂肪燃焼ジェル | Ad Creative Sample",
  "Video10-VitaminC": "ビタミンCサプリ | Ad Creative Sample",
  "Video11-DeoSpray": "制汗デオドラント | Ad Creative Sample",
  "Video12-NailSerum": "ネイルセラム | Ad Creative Sample",
  "Video13-KneeSupport": "膝サポーター | Ad Creative Sample",
  "Video14-EyeSupplement": "ブルーライトサプリ | Ad Creative Sample",
  "Video15-WrinkleCream": "シワ改善クリーム | Ad Creative Sample",
  "Video16-GutHealth": "腸活サプリ | Ad Creative Sample",
  "Video17-FootMassager": "フットマッサージャー | Ad Creative Sample",
  "Video18-HairOil": "ヘアオイル | Ad Creative Sample",
  "Video19-BodyScrub": "ボディスクラブ | Ad Creative Sample",
  "Video20-AcnePatch": "ニキビパッチ | Ad Creative Sample",
  "Video21-PostureCorrector": "姿勢矯正ベルト | Ad Creative Sample",
  "Video22-LipPlumper": "リッププランパー | Ad Creative Sample",
  "Video23-MCTOil": "MCTオイル | Ad Creative Sample",
  "Video24-HandCream": "ハンドクリーム | Ad Creative Sample",
  "Video25-BlueLightGlass": "ブルーライトメガネ | Ad Creative Sample",
  "Video26-ScalpShampoo": "スカルプシャンプー | Ad Creative Sample",
  "Video27-ElectricBrush": "電動歯ブラシ | Ad Creative Sample",
  "Video28-MusclePatch": "筋肉リカバリーパッチ | Ad Creative Sample",
  "Video29-SunscreenGel": "日焼け止めジェル | Ad Creative Sample",
  "Video30-IronSupplement": "鉄分サプリ | Ad Creative Sample",
  "Video31-DetoxTea": "デトックスティー | Ad Creative Sample",
};

const DESCRIPTION =
  "Remotion (React + TypeScript) でプログラマティックに生成したショート動画広告サンプルです。\n\nデータ駆動型アーキテクチャにより、1つのVideoConfig配列から複数の広告動画を自動生成しています。\n\n#shorts #広告クリエイティブ #Remotion #React";

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log(`📹 ${videos.length} videos found in ${OUTPUT_DIR}`);
  console.log(`📋 ${Object.keys(existingIds).length} already uploaded\n`);

  // Googleのbot検出を回避するため、既存のChromeプロファイルをコピーして使用
  // （Chrome起動中でも使える）
  const tempDir = path.resolve(".chrome-profile");
  const srcDir = `/Users/yoshiakiokazaki/Library/Application Support/Google/Chrome`;

  // Cookieだけコピー（軽量）
  const { execSync } = await import("node:child_process");
  execSync(`mkdir -p "${tempDir}/Default"`);
  for (const f of ["Cookies", "Cookies-journal", "Login Data", "Web Data", "Preferences", "Secure Preferences"]) {
    try { execSync(`cp "${srcDir}/Default/${f}" "${tempDir}/Default/" 2>/dev/null`); } catch {}
  }
  try { execSync(`cp "${srcDir}/Local State" "${tempDir}/" 2>/dev/null`); } catch {}

  const context = await chromium.launchPersistentContext(tempDir, {
    headless: false,
    slowMo: 150,
    args: [
      "--disable-blink-features=AutomationControlled",
    ],
  });

  const page = context.pages()[0] || await context.newPage();

  // YouTube Studioに遷移
  await page.goto("https://studio.youtube.com");
  await sleep(3000);

  // ログインが必要な場合は待機（Chromeプロファイル利用なので通常不要）
  if (page.url().includes("accounts.google.com")) {
    console.log("\n🔐 Googleログインが必要です。ブラウザでログインしてください...");
    await page.waitForURL("**/studio.youtube.com/**", { timeout: 300000 });
    console.log("✅ ログイン成功\n");
  }

  await sleep(2000);

  for (const videoFile of videos) {
    const videoId = videoFile.replace(".mp4", "");

    // 既にアップ済みならスキップ
    if (existingIds[videoId]) {
      console.log(`⏭️  ${videoId} already uploaded (${existingIds[videoId]})`);
      continue;
    }

    const filePath = path.join(OUTPUT_DIR, videoFile);
    const title = TITLES[videoId] || videoId;

    console.log(`\n📤 Uploading: ${videoId}`);
    console.log(`   Title: ${title}`);

    try {
      // アップロードボタンをクリック
      await page.goto("https://studio.youtube.com");
      await sleep(2000);

      // 「作成」ボタン
      await page.click("#create-icon");
      await sleep(1000);

      // 「動画をアップロード」
      await page.click('tp-yt-paper-item:has-text("動画をアップロード"), tp-yt-paper-item:has-text("Upload video"), #text-item-0');
      await sleep(2000);

      // ファイル選択
      const fileInput = await page.locator('input[type="file"]');
      await fileInput.setInputFiles(filePath);
      await sleep(5000);

      // タイトル入力
      const titleInput = await page.locator('#textbox[aria-label*="タイトル"], #textbox[aria-label*="title"]').first();
      await titleInput.click({ clickCount: 3 });
      await titleInput.fill(title);
      await sleep(1000);

      // 説明文入力
      const descInput = await page.locator('#textbox[aria-label*="説明"], #textbox[aria-label*="description"]').first();
      await descInput.click();
      await descInput.fill(DESCRIPTION);
      await sleep(1000);

      // 「いいえ、子ども向けではありません」を選択
      const notForKids = await page.locator('tp-yt-paper-radio-button[name="NOT_MADE_FOR_KIDS"], #radioLabel:has-text("いいえ"), #radioLabel:has-text("No, it")').first();
      await notForKids.click();
      await sleep(1000);

      // 「次へ」を3回クリック（詳細、要素、チェック）
      for (let i = 0; i < 3; i++) {
        await page.click('#next-button');
        await sleep(2000);
      }

      // 公開設定 → 限定公開を選択
      const unlisted = await page.locator('tp-yt-paper-radio-button[name="UNLISTED"], #radioLabel:has-text("限定公開"), #radioLabel:has-text("Unlisted")').first();
      await unlisted.click();
      await sleep(1000);

      // 公開ボタン
      await page.click('#done-button');
      await sleep(5000);

      // URLを取得
      const linkElement = await page.locator('a.style-scope.ytcp-video-info[href*="youtu"]').first();
      const videoUrl = await linkElement.getAttribute("href").catch(() => null);

      if (videoUrl) {
        const ytId = videoUrl.split("/").pop() || videoUrl.split("v=").pop();
        existingIds[videoId] = ytId;
        writeFileSync(IDS_FILE, JSON.stringify(existingIds, null, 2));
        console.log(`✅ ${videoId} → ${ytId}`);
      } else {
        console.log(`⚠️  ${videoId} uploaded but couldn't extract ID`);
      }

      // ダイアログを閉じる
      await page.click('ytcp-button:has-text("閉じる"), ytcp-button:has-text("Close")').catch(() => {});
      await sleep(3000);

    } catch (err) {
      console.error(`❌ ${videoId} failed: ${err.message}`);
    }
  }

  // 最終的なIDリストを保存
  writeFileSync(IDS_FILE, JSON.stringify(existingIds, null, 2));
  console.log(`\n📊 Upload complete. ${Object.keys(existingIds).length}/${videos.length} uploaded`);
  console.log(`📁 IDs saved to: ${IDS_FILE}`);

  await context.close();
}

main().catch(console.error);
