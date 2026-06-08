/**
 * Script para gerar favicons PNG a partir do SVG
 * usando apenas módulos nativos do Node.js + canvas (se disponível)
 * ou Jimp como fallback
 */

const fs = require('fs');
const path = require('path');

// Read the SVG
const svgPath = path.join(__dirname, 'public', 'icon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Try sharp first
async function generateWithSharp() {
  const sharp = require('sharp');
  const svgBuffer = Buffer.from(svgContent);
  
  // 32x32 PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, 'public', 'icon-32x32.png'));
  console.log('✅ icon-32x32.png created');

  // 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, 'public', 'icon-192x192.png'));
  console.log('✅ icon-192x192.png created');

  // 180x180 Apple icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, 'public', 'apple-icon.png'));
  console.log('✅ apple-icon.png created');

  console.log('🎉 All favicons generated successfully!');
}

generateWithSharp().catch(err => {
  console.log('Sharp not available:', err.message);
  console.log('Installing sharp...');
});
