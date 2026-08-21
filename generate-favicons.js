import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  console.log('Generating favicons from SVG...');

  // 48x48 PNG (Google Search Favicon standard)
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.resolve('public/favicon-48x48.png'));

  // 96x96 PNG
  await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toFile(path.resolve('public/favicon-96x96.png'));

  // 192x192 PNG (PWA / Android standard)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.resolve('public/favicon-192x192.png'));

  // 512x512 PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/favicon-512x512.png'));

  // 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/apple-touch-icon.png'));

  // General favicon.png
  await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toFile(path.resolve('public/favicon.png'));

  // 48x48 favicon.ico
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.resolve('public/favicon.ico'));

  console.log('All favicons successfully generated!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
