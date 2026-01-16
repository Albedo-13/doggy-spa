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

  const errCode = await page.getByText('404');
  const notFoundText = await page.getByText('Dog not found :(');

  await expect(errCode).toBeVisible();
  await expect(notFoundText).toBeVisible();
});

test.afterAll(() => {
  server.close();
});
