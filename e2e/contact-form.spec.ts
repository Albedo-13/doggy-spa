import { expect, test } from '@playwright/test';

// TODO: мокнуть запросы

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/contact-us');
});

test('Should successfully submit the form', async ({
  page,
}) => {
  const firstName = page.getByPlaceholder('First Name');
  await firstName.fill('John');

  const lastName = page.getByPlaceholder('Last Name');
  await lastName.fill('Doe');

  const email = page.getByPlaceholder('Email').first();
  await email.fill('valid@gmail.com');

  const phone = page.getByPlaceholder('Phone number');
  await phone.fill('123456');

  const submitButton = page.getByTestId('contact-spa-form-submit');
  await submitButton.click();

  // empty form means successfull submit
  await expect(firstName).toHaveValue('');
  await expect(lastName).toHaveValue('');
  await expect(email).toHaveValue('');
  await expect(phone).toHaveValue('');
});

test('Should show errors on wrong inputs', async ({ page }) => {
  const submitButton = page.getByTestId('contact-spa-form-submit');
  await submitButton.click();

  await expect(page.getByText("Field 'First Name' is required")).toBeVisible();
  await expect(page.getByText("Field 'Last Name' is required")).toBeVisible();
  await expect(page.getByText("Field 'Email' is required")).toBeVisible();
  await expect(page.getByText("Field must be correct phone number")).toBeVisible();
});
