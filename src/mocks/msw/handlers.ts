import { graphql, http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://api.emailjs.com/api/v1.0/email/send', async () => {
    // console.log('Catch & mock "api/v1.0/email/send":', request);
    return HttpResponse.text('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain;',
      },
    });
  }),
  graphql.link('/api/graphql').query('SearchDog', async ({ variables }) => {
    console.log('Catch & mock "search":', variables);

    const { name } = variables as { name?: string };
    const list = [
      {
        name: 'Broholmer',
        image_link: 'https://api-ninjas.com/images/dogs/broholmer.jpg',
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

    if (name && name.length > 2) {
      return HttpResponse.json({
        data: {
          dogs: list.filter((d) =>
            d.name.toLowerCase().includes(String(name).toLowerCase()),
          ),
        },
      });
    }
    return HttpResponse.json({ data: { dogs: [] } });
  }),
];
