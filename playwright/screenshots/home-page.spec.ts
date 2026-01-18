import { expect, test } from '@playwright/test';

test('Home page visual regression', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('home-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
