import { expect, test } from '@playwright/test';

import { server } from '@/mocks/msw/server';

server.listen();

test.beforeEach(async ({ page }) => {
  await page.route('**/api/graphql', async (route) => {
    const req = route.request();
    const post = req.method() === 'POST';
    const body = post ? await req.postDataJSON() : null;
    if (post && body?.operationName === 'SearchDog') {
      const list = [
        {
          name: 'Golden Retriever',
          image_link: 'https://api-ninjas.com/images/dogs/golden_retriever.jpg',
          energy: 2,
          min_life_expectancy: 8,
          good_with_strangers: 3,
          good_with_other_dogs: 3,
          __typename: 'Dog',
        },
        {
          name: 'Pembroke Welsh Corgi',
          image_link:
            'https://api-ninjas.com/images/dogs/pembroke_welsh_corgi.jpg',
          energy: 4,
          min_life_expectancy: 12,
          good_with_strangers: 4,
          good_with_other_dogs: 4,
          __typename: 'Dog',
        },
      ];

      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            dogs: list.filter((d) =>
              d.name
                .toLowerCase()
                .includes(
                  body.variables.name.replace(/%20/, ' ').toLowerCase(),
                ),
            ),
          },
        }),
      });
    }

    return route.continue();
  });

  await page.goto('/info');
});

test('Info page default visual regression', async ({ page }) => {
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('info-default-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});

test('Info page 404 visual regression', async ({ page }) => {
  await page.goto('/info/some-unexisting-dog');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('info-404-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});

test('Info page searched dog visual regression', async ({ page }) => {
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

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('info-searched-dog-fullpage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
