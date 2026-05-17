import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
const el = await page.$('#sponsors');
await el.screenshot({ path: 'temporary screenshots/screenshot-46-reminders-v2.png' });
await browser.close();
console.log('done');
