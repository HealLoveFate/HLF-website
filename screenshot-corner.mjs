import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({
  path: 'temporary screenshots/screenshot-44-music-corner.png',
  clip: { x: 1340, y: 800, width: 100, height: 100 }
});
await browser.close();
console.log('done');
