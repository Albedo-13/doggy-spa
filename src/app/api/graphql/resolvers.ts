import fetch from 'node-fetch';

import { Dog } from '@/types/dog';

// Резолверы для обработки запросов
export const resolvers = {
  Query: {
    dogs: async (_: unknown, { name }: { name: string }) => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/dogs?name=${name}`,
        {
          headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_NINJAS_API_KEY || '',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = (await response.json()) as Dog[];
      return data.map((dog) => ({
        name: dog.name,
        image_link: dog.image_link,
        energy: dog.energy,
        min_life_expectancy: dog.min_life_expectancy,
        good_with_strangers: dog.good_with_strangers,
        good_with_other_dogs: dog.good_with_other_dogs,
      }));
    },
  },
};
