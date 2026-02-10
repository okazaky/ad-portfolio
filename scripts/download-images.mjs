/**
 * Pexels画像ダウンロードスクリプト（日本人モデル版）
 *
 * 使い方:
 *   PEXELS_API_KEY=xxx node scripts/download-images.mjs
 *
 * --force フラグでプレースホルダーを上書き:
 *   PEXELS_API_KEY=xxx node scripts/download-images.mjs --force
 *
 * Pexels API Key は https://www.pexels.com/api/new/ から無料取得できます。
 */
import { writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import https from "node:https";

const API_KEY = process.env.PEXELS_API_KEY;
if (!API_KEY) {
  console.error("Error: PEXELS_API_KEY environment variable is required.");
  console.error("Get a free API key at https://www.pexels.com/api/new/");
  process.exit(1);
}

const FORCE = process.argv.includes("--force");
const IMAGE_DIR = "public/images";
mkdirSync(IMAGE_DIR, { recursive: true });

// 画像が実画像（>1KB）か、プレースホルダー（<1KB）かを判定
function isPlaceholder(filePath) {
  if (!existsSync(filePath)) return true;
  const stat = statSync(filePath);
  return stat.size < 1024; // 1KB未満はプレースホルダー
}

// Search queries per video: [hook(人物/背景), product(商品), person(人物)]
// hook/person → 「japanese」を付けて日本人を確実に取得
// product → 商品のみなので国籍不問
const VIDEO_IMAGES = [
  // Video01 already has real images, skip
  {
    prefix: "v02",
    queries: [
      "japanese woman skincare beauty face",
      "serum bottle cosmetic product",
      "japanese woman beautiful smile portrait",
    ],
  },
  {
    prefix: "v03",
    queries: [
      "japanese man hair worry mirror",
      "hair tonic bottle product",
      "japanese man confident smile portrait",
    ],
  },
  {
    prefix: "v04",
    queries: [
      "japanese man gym workout training",
      "protein bar chocolate snack",
      "japanese man fitness muscle",
    ],
  },
  {
    prefix: "v05",
    queries: [
      "japanese woman sleeping bed peaceful",
      "sleep supplement capsule pill",
      "japanese woman morning wake up stretch",
    ],
  },
  {
    prefix: "v06",
    queries: [
      "japanese woman eye closeup beauty",
      "eye cream jar cosmetic luxury",
      "japanese woman bright eyes smile",
    ],
  },
  {
    prefix: "v07",
    queries: [
      "japanese woman white teeth smile",
      "toothpaste whitening product tube",
      "japanese woman laughing bright smile",
    ],
  },
  {
    prefix: "v08",
    queries: [
      "japanese woman skin glow beauty",
      "collagen drink bottle pink",
      "japanese woman glowing skin happy",
    ],
  },
  {
    prefix: "v09",
    queries: [
      "japanese woman belly waist fitness",
      "body gel cream cosmetic tube",
      "japanese woman slim body fit",
    ],
  },
  {
    prefix: "v10",
    queries: [
      "lemon orange citrus fruit vitamin",
      "vitamin c supplement capsule bottle",
      "japanese woman healthy energy happy",
    ],
  },
  {
    prefix: "v11",
    queries: [
      "japanese man sweating summer hot",
      "deodorant spray roll on product",
      "japanese businessman confident suit",
    ],
  },
  {
    prefix: "v12",
    queries: [
      "japanese woman nails hands beautiful",
      "nail serum oil bottle product",
      "japanese woman hands manicure elegant",
    ],
  },
  {
    prefix: "v13",
    queries: [
      "japanese senior knee pain walking",
      "knee brace support medical",
      "japanese senior walking happy park",
    ],
  },
  {
    prefix: "v14",
    queries: [
      "japanese person computer eye tired",
      "eye supplement blueberry capsule",
      "japanese woman laptop happy office",
    ],
  },
  {
    prefix: "v15",
    queries: [
      "japanese mature woman face elegant",
      "anti wrinkle cream jar luxury",
      "japanese mature woman beautiful confident",
    ],
  },
  {
    prefix: "v16",
    queries: [
      "japanese woman stomach health belly",
      "probiotic supplement yogurt capsule",
      "japanese woman happy cheerful healthy",
    ],
  },
  {
    prefix: "v17",
    queries: [
      "japanese woman feet tired office",
      "foot massager device electric",
      "japanese woman relaxing home sofa",
    ],
  },
  {
    prefix: "v18",
    queries: [
      "japanese woman dry damaged hair",
      "hair oil bottle product amber",
      "japanese woman beautiful long shiny hair",
    ],
  },
  {
    prefix: "v19",
    queries: [
      "japanese woman body skin care bath",
      "body scrub jar salt sugar",
      "japanese woman smooth skin beautiful",
    ],
  },
  {
    prefix: "v20",
    queries: [
      "japanese woman skin concern face",
      "acne patch skincare product",
      "japanese woman clear skin confident",
    ],
  },
  {
    prefix: "v21",
    queries: [
      "japanese person bad posture desk computer",
      "posture corrector back brace belt",
      "japanese woman good posture standing",
    ],
  },
  {
    prefix: "v22",
    queries: [
      "japanese woman lips closeup beauty",
      "lip gloss plumper product pink",
      "japanese woman beautiful lips smile",
    ],
  },
  {
    prefix: "v23",
    queries: [
      "coconut oil mct healthy cooking",
      "mct oil bottle clear product",
      "japanese woman cooking kitchen healthy",
    ],
  },
  {
    prefix: "v24",
    queries: [
      "japanese woman dry hands winter cold",
      "hand cream tube luxury product",
      "japanese woman beautiful hands ring",
    ],
  },
  {
    prefix: "v25",
    queries: [
      "japanese person computer blue screen night",
      "blue light glasses fashionable",
      "japanese woman wearing glasses portrait",
    ],
  },
  {
    prefix: "v26",
    queries: [
      "japanese man scalp hair shampoo",
      "shampoo bottle natural product",
      "japanese man healthy hair smile",
    ],
  },
  {
    prefix: "v27",
    queries: [
      "japanese woman brushing teeth bathroom",
      "electric toothbrush modern product",
      "japanese woman bright smile teeth clean",
    ],
  },
  {
    prefix: "v28",
    queries: [
      "japanese man muscle sore gym workout",
      "muscle recovery patch heat pad",
      "japanese man athlete fitness strong",
    ],
  },
  {
    prefix: "v29",
    queries: [
      "japanese woman sun summer beach hat",
      "sunscreen gel tube spf product",
      "japanese woman outdoor summer beautiful",
    ],
  },
  {
    prefix: "v30",
    queries: [
      "japanese woman tired fatigue office desk",
      "iron supplement pill red capsule",
      "japanese woman energetic happy morning",
    ],
  },
  {
    prefix: "v31",
    queries: [
      "herbal tea cup green warm",
      "detox tea bags natural organic",
      "japanese woman drinking tea relaxing",
    ],
  },
];

const SUFFIXES = ["hook", "product", "person"];

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { Authorization: API_KEY } },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`JSON parse error: ${data.slice(0, 200)}`));
          }
        });
      }
    );
    req.on("error", reject);
  });
}

function downloadFile(url, path) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        return downloadFile(res.headers.location, path)
          .then(resolve)
          .catch(reject);
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        writeFileSync(path, Buffer.concat(chunks));
        resolve();
      });
    });
    req.on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const video of VIDEO_IMAGES) {
    for (let i = 0; i < video.queries.length; i++) {
      const suffix = SUFFIXES[i];
      const filePath = `${IMAGE_DIR}/${video.prefix}-${suffix}.jpg`;

      // Skip if real image exists (unless --force)
      if (!FORCE && existsSync(filePath) && !isPlaceholder(filePath)) {
        console.log(`⏭️  Skip ${filePath} (real image exists)`);
        skipped++;
        continue;
      }

      const query = encodeURIComponent(video.queries[i]);
      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=3&orientation=portrait`;

      try {
        const data = await fetchJSON(url);
        if (data.photos && data.photos.length > 0) {
          // portraitサイズ（1080x1920に近いもの）を取得
          const imgUrl = data.photos[0].src.large2x || data.photos[0].src.large;
          await downloadFile(imgUrl, filePath);
          downloaded++;
          const size = statSync(filePath).size;
          console.log(
            `✅ ${filePath} (${(size / 1024).toFixed(0)}KB) - "${video.queries[i]}"`
          );
        } else {
          console.warn(
            `⚠️  No results for "${video.queries[i]}" -> ${filePath}`
          );
          failed++;
        }
      } catch (err) {
        console.error(`❌ Failed ${filePath}: ${err.message}`);
        failed++;
      }

      // Rate limit: Pexels allows ~200 req/min
      await sleep(400);
    }
  }

  console.log(
    `\n📊 Results: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`
  );
  console.log(`📁 Images dir: ${IMAGE_DIR}/`);
}

main();
