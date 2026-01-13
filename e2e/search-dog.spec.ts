import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/info');
});

test('Should search and redirect to dog page on text input', async ({
  page,
}) => {
  const input = page.getByPlaceholder('Dog name...');
  await expect(input).toBeVisible();

  await input.fill('golden');
  const goldenRetrieverLink = page.getByRole('link', {
    name: 'Golden Retriever',
  });
  await expect(goldenRetrieverLink).toBeVisible();

  await goldenRetrieverLink.click();
  await expect(page).toHaveURL('http://localhost:3000/info/Golden%20Retriever');
  await expect(page.getByText('Golden Retriever')).toBeVisible();
  await expect(page.getByText('Min Life Expectancy')).toBeVisible();
  await expect(page.getByText('Good with Strangers')).toBeVisible();
  await expect(page.getByText('Good with Other Dogs')).toBeVisible();
});

test('Should show "No results" on wrong search', async ({ page }) => {
  const input = page.getByPlaceholder('Dog name...');
  await input.fill('some unexisting dog');
  const noResultsText = page.getByText('No results');
  await expect(noResultsText).toBeVisible();
});

test('Should show 404 on invalid redirect', async ({ page }) => {
  await page.goto('http://localhost:3000/info/some-unexisting-dog');

  const errCode = page.getByText('404');
  const notFoundText = page.getByText('Dog not found :(');

  await expect(errCode).toBeVisible();
  await expect(notFoundText).toBeVisible();
});
