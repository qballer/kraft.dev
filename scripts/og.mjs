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
  .replace(/class="kd-is"/g, 'stroke="#2a2520"')
  .replace(/class="kd-i"/g, 'fill="#2a2520"')
  .replace(/class="kd-a"/g, 'fill="#b5562b"');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4eee2"/>
  <g transform="translate(80 80) scale(2.6)">${logo}</g>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#2a2520">Engineering craft in the</text>
  <text x="80" y="415" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#2a2520">age of AI agents.</text>
  <text x="80" y="530" font-family="Menlo, 'Courier New', monospace" font-size="26" letter-spacing="3" fill="#b5562b">MEETUP #1 · 9 DEC 2026 · HIBOB, TEL AVIV</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
