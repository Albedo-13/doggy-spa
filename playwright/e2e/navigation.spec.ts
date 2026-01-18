import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
});

test('Should redirect to all available pages', async ({ page }) => {
  await page.getByRole('link', { name: 'info' }).first().click();
  await expect(page).toHaveURL('/info');

  await page.getByRole('link', { name: 'Spa Services' }).first().click();
  await expect(page).toHaveURL('/spa-services');

  await page.getByRole('link', { name: 'Book Appointment' }).first().click();
  await expect(page).toHaveURL('/book-appointment');

  await page.getByRole('link', { name: 'Blog' }).first().click();
  await expect(page).toHaveURL('/blog');

  await page.getByRole('link', { name: 'About Us' }).first().click();
  await expect(page).toHaveURL('/about-us');

  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await expect(page).toHaveURL('/contact-us');

  await page.getByRole('link', { name: 'Home' }).first().click();
  await expect(page).toHaveURL('/');
});
