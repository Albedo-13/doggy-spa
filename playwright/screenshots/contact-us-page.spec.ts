import { expect, test } from '@playwright/test';

test('Contact us page visual regression', async ({ page }) => {
  await page.goto('/contact-us');
  await page.waitForLoadState('networkidle');
  
  const firstName = page.getByPlaceholder('First Name');
  await firstName.fill('John');

  const lastName = page.getByPlaceholder('Last Name');
  await lastName.fill('Doe');

  const email = page.getByPlaceholder('Email').first();
  await email.fill('valid@gmail.com');

  const phone = page.getByPlaceholder('Phone number');
  await phone.fill('123456');

  await expect(page).toHaveScreenshot('contact-us-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
