import { expect, test } from '@playwright/test';

test('Spa services page visual regression', async ({ page }) => {
  await page.goto('/spa-services');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('spa-services-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
