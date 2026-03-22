import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "public", "logo-tarrl.svg");
const svg = readFileSync(svgPath);

const favicon32 = await sharp(svg).resize(32, 32).png().toBuffer();
const favicon48 = await sharp(svg).resize(48, 48).png().toBuffer();
const apple180 = await sharp(svg).resize(180, 180).png().toBuffer();

writeFileSync(join(root, "public", "favicon-32.png"), favicon32);
writeFileSync(join(root, "public", "favicon-48.png"), favicon48);
writeFileSync(join(root, "public", "apple-touch-icon.png"), apple180);
writeFileSync(
  join(root, "public", "favicon.ico"),
  await toIco([favicon32, favicon48])
);
