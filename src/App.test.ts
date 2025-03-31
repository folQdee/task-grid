import { test, expect } from '@playwright/test';
import path from 'path';

test('Рисуется нужное изображение', async ({ page }) => {
    await page.goto(`file:${path.join(__dirname, '/..', 'index.html')}`);
    await expect(page).toHaveScreenshot();
});

/*test('Верстка не тронута', async ({ page }) => {
    await page.goto(`file:${path.join(__dirname, '/..', 'index.html')}`);
    const container = await page.evaluate(() => document.body.innerHTML);

    expect(container).toMatchSnapshot();
});*/
