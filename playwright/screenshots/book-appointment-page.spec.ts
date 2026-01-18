import { expect, test } from '@playwright/test';

test('Book appointment page visual regression', async ({ page }) => {
  await page.goto('/book-appointment');

  const firstName = page.getByPlaceholder('First Name');
  await firstName.fill('John');

  const lastName = page.getByPlaceholder('Last Name');
  await lastName.fill('Doe');

  const email = page.getByPlaceholder('Email').first();
  await email.fill('valid@gmail.com');

  const phone = page.getByPlaceholder('Phone number');
  await phone.fill('123456');

  const timeslot = page.getByText('11 am - 12 pm');
  await timeslot.click();

  const nextMonth = page.getByTestId('calendar-next-month');
  await nextMonth.click();

  await page.click('[data-testid="calendar-date"]:not([disabled])');

  const creditCardNumber = page.getByPlaceholder('Credit Card Number');
  await creditCardNumber.fill('1234567812345678');

  const expiryDate = page.getByPlaceholder('Expiry Date');
  await expiryDate.fill('12/25');

  const cvv = page.getByPlaceholder('CVV');
  await cvv.fill('123');

  const cardName = page.getByPlaceholder('Name on Card');
  await cardName.fill('John Doe');

  await expect(page).toHaveScreenshot('book-appointment-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
