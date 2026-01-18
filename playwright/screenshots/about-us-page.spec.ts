import { expect, test } from '@playwright/test';

test('About us page visual regression', async ({ page }) => {
  await page.goto('/about-us');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('about-us-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
