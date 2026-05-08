/**
 * Generates branded icon files from public/kscan-icon.png:
 *   public/icon-192.png   (192×192 PNG for Android/PWA)
 *   public/favicon.ico    (32×32 PNG wrapped in ICO container)
 *   app/favicon.ico       (same file, so Next.js App Router auto-discovers it)
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const src = join(root, "public", "kscan-icon.png");

// ── 192×192 PNG ───────────────────────────────────────────────────────────
const png192 = await sharp(src)
  .resize(192, 192, { fit: "contain", background: { r: 9, g: 9, b: 11, alpha: 1 } })
  .png()
  .toBuffer();
writeFileSync(join(root, "public", "icon-192.png"), png192);
console.log("✓ public/icon-192.png");

// ── 32×32 RGBA PNG for ICO ────────────────────────────────────────────────
// Next.js / Turbopack's ICO decoder requires the embedded PNG to be RGBA.
const png32 = await sharp(src)
  .resize(32, 32, { fit: "contain", background: { r: 9, g: 9, b: 11, alpha: 1 } })
  .ensureAlpha()
  .png()
  .toBuffer();

// Wrap the PNG in a minimal ICO container (PNG-in-ICO, Windows Vista+ format)
function pngToIco(pngBuffer) {
  const size = pngBuffer.length;
  const dataOffset = 6 + 16; // header + one directory entry

  const buf = Buffer.alloc(dataOffset + size);

  // ICO header (6 bytes)
  buf.writeUInt16LE(0, 0);   // reserved
  buf.writeUInt16LE(1, 2);   // type: ICO
  buf.writeUInt16LE(1, 4);   // count: 1 image

  // Directory entry (16 bytes)
  buf.writeUInt8(32, 6);     // width (32px)
  buf.writeUInt8(32, 7);     // height (32px)
  buf.writeUInt8(0, 8);      // color count (0 = not a palette image)
  buf.writeUInt8(0, 9);      // reserved
  buf.writeUInt16LE(1, 10);  // planes
  buf.writeUInt16LE(32, 12); // bit count (32bpp)
  buf.writeUInt32LE(size, 14);        // size of image data
  buf.writeUInt32LE(dataOffset, 18);  // offset to image data

  // PNG data
  pngBuffer.copy(buf, dataOffset);

  return buf;
}

const icoBuffer = pngToIco(png32);
writeFileSync(join(root, "public", "favicon.ico"), icoBuffer);
console.log("✓ public/favicon.ico");

writeFileSync(join(root, "app", "favicon.ico"), icoBuffer);
console.log("✓ app/favicon.ico");

console.log("Done.");
