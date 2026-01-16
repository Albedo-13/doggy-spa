import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('Should redirect to all available pages', async ({ page }) => {
  await page.getByRole('link', { name: 'info' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/info');

  await page.getByRole('link', { name: 'Spa Services' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/spa-services');

  await page.getByRole('link', { name: 'Book Appointment' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/book-appointment');

  await page.getByRole('link', { name: 'Blog' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/blog');

  await page.getByRole('link', { name: 'About Us' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/about-us');

  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/contact-us');

  await page.getByRole('link', { name: 'Home' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/');
});
