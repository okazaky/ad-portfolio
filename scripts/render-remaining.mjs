import { execSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";

const VIDEO_IDS = [
  "Video03-HairGrowth", "Video04-ProteinBar", "Video05-SleepPill",
  "Video06-EyeCream", "Video07-ToothWhitening", "Video08-CollagenDrink",
  "Video09-FatBurner", "Video10-VitaminC", "Video11-DeoSpray",
  "Video12-NailSerum", "Video13-KneeSupport", "Video14-EyeSupplement",
  "Video15-WrinkleCream", "Video16-GutHealth", "Video17-FootMassager",
  "Video18-HairOil", "Video19-BodyScrub", "Video20-AcnePatch",
  "Video21-PostureCorrector", "Video22-LipPlumper", "Video23-MCTOil",
  "Video24-HandCream", "Video25-BlueLightGlass", "Video26-ScalpShampoo",
  "Video27-ElectricBrush", "Video28-MusclePatch", "Video29-SunscreenGel",
  "Video30-IronSupplement", "Video31-DetoxTea",
];

mkdirSync("output", { recursive: true });
let ok = 0, fail = 0;

for (const id of VIDEO_IDS) {
  const out = `output/${id}.mp4`;
  if (existsSync(out)) { console.log(`⏭️ Skip ${id}`); ok++; continue; }
  console.log(`🎬 ${id}...`);
  try {
    execSync(`npx remotion render ${id} ${out}`, { stdio: "inherit" });
    ok++;
    console.log(`✅ ${id}`);
  } catch { fail++; console.error(`❌ ${id}`); }
}
console.log(`\n📊 ${ok} ok, ${fail} failed / ${VIDEO_IDS.length} total`);
