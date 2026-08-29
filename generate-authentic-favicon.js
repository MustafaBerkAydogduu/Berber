import opentype from 'opentype.js';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function build() {
  const buffer = fs.readFileSync(path.resolve('AlexBrush.woff2'));
  const font = opentype.parse(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength));
  
  // Font size for 192x192 canvas
  const fontSize = 145;
  const initialPath = font.getPath('N', 0, 0, fontSize);
  const bbox = initialPath.getBoundingBox();
  
  const width = bbox.x2 - bbox.x1;
  const height = bbox.y2 - bbox.y1;
  
  // Center glyph perfectly in 192x192
  const targetX = 96 - (bbox.x1 + width / 2);
  const targetY = 96 - (bbox.y1 + height / 2);
  
  const centeredPath = font.getPath('N', targetX, targetY, fontSize);
  
  // Convert commands directly to precise, non-NaN SVG path data
  let pathData = '';
  for (const cmd of centeredPath.commands) {
    if (cmd.type === 'M') {
      pathData += 'M' + cmd.x.toFixed(2) + ' ' + cmd.y.toFixed(2);
    } else if (cmd.type === 'L') {
      pathData += 'L' + cmd.x.toFixed(2) + ' ' + cmd.y.toFixed(2);
    } else if (cmd.type === 'C') {
      pathData += 'C' + cmd.x1.toFixed(2) + ' ' + cmd.y1.toFixed(2) + ' ' + cmd.x2.toFixed(2) + ' ' + cmd.y2.toFixed(2) + ' ' + cmd.x.toFixed(2) + ' ' + cmd.y.toFixed(2);
    } else if (cmd.type === 'Q') {
      pathData += 'Q' + cmd.x1.toFixed(2) + ' ' + cmd.y1.toFixed(2) + ' ' + cmd.x.toFixed(2) + ' ' + cmd.y.toFixed(2);
    } else if (cmd.type === 'Z') {
      pathData += 'Z';
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <!-- Crisp Pure White Circle Background -->
  <circle cx="96" cy="96" r="96" fill="#FFFFFF"/>
  <!-- Pure Authentic Alex Brush Capital 'N' (Exact Site Brand Font) -->
  <path d="${pathData}" fill="#161719"/>
</svg>`;

  fs.writeFileSync(path.resolve('public/favicon.svg'), svg);
  console.log('Saved public/favicon.svg (Contains NaN: ' + svg.includes('NaN') + ')');
  
  const svgBuffer = Buffer.from(svg);
  
  // Generate all PNG / ICO sizes
  await sharp(svgBuffer).resize(48, 48).png().toFile(path.resolve('public/favicon-48x48.png'));
  await sharp(svgBuffer).resize(96, 96).png().toFile(path.resolve('public/favicon-96x96.png'));
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.resolve('public/favicon-192x192.png'));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.resolve('public/favicon-512x512.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.resolve('public/apple-touch-icon.png'));
  await sharp(svgBuffer).resize(96, 96).png().toFile(path.resolve('public/favicon.png'));
  await sharp(svgBuffer).resize(48, 48).png().toFile(path.resolve('public/favicon.ico'));
  
  console.log('All authentic Alex Brush favicons generated successfully!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
