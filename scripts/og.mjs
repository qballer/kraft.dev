// Generates public/og.png (1200x630), the social preview image.
// Run: npm run og   (re-run after changing the copy below)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
const logo = readFileSync(new URL('../public/logo/option-a.svg', import.meta.url), 'utf8')
  .replace(/^<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replace(/<style>[\s\S]*?<\/style>/, '')
  .replace(/class="kd-is"/g, 'stroke="#eceef2"')
  .replace(/class="kd-i"/g, 'fill="#eceef2"')
  .replace(/class="kd-a"/g, 'fill="#ff6a2b"');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e1014"/>
  <rect x="0" y="622" width="1200" height="8" fill="#ff6a2b"/>
  <g transform="translate(80 80) scale(2.6)">${logo}</g>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#eceef2">Engineering craft in the</text>
  <text x="80" y="415" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#eceef2">age of AI agents.</text>
  <text x="80" y="530" font-family="Menlo, 'Courier New', monospace" font-size="26" letter-spacing="3" fill="#ff6a2b">MEETUP #1 · 9 DEC 2026 · HIBOB, TEL AVIV</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
