import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/book-appointment');
});

test('Should successfully submit the form', async ({ page }) => {
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

  const submitButton = page.getByTestId('book-appointment-form-submit');
  await submitButton.click();

  await expect(
    page.getByText('Please check your data before booking'),
  ).toBeVisible();
  await expect(page.getByText('Email: valid@gmail.com')).toBeVisible();
  await expect(page.getByText('Phone: 123456')).toBeVisible();

  const bookButton = page.getByTestId('book-now-submit-form');
  await bookButton.click();

  await expect(firstName).toHaveValue('');
  await expect(lastName).toHaveValue('');
  await expect(email).toHaveValue('');
  await expect(phone).toHaveValue('');
  await expect(
    page.getByText('Please check your data before booking'),
  ).not.toBeVisible();
});

test('Should show errors on wrong inputs', async ({ page }) => {
  const submitButton = page.getByTestId('book-appointment-form-submit');
  await submitButton.click();

  await expect(page.getByText("Field 'First Name' is required")).toBeVisible();
  await expect(page.getByText("Field 'Last Name' is required")).toBeVisible();
  await expect(page.getByText("Field 'Email' is required")).toBeVisible();
  await expect(
    page.getByText('Field must be correct phone number'),
  ).toBeVisible();
  await expect(
    page.getByText('At least one timeslot must be selected'),
  ).toBeVisible();
  await expect(page.getByText('Choose the date')).toBeVisible();
  await expect(page.getByText('Card number must be 16 digits')).toBeVisible();
  await expect(
    page.getByText('Expiry date must be in MM/YY format'),
  ).toBeVisible();
  await expect(page.getByText('CVV must be 3 or 4 digits')).toBeVisible();
  await expect(
    page.getByText("Field 'Name on Card' is required"),
  ).toBeVisible();
});
