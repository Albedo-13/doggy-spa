import { gql } from '@apollo/client';

export const SEARCH_DOG = gql`
  query SearchDog($name: String!) {
    dogs(name: $name) {
      name
      image_link
      energy
      min_life_expectancy
      good_with_strangers
      good_with_other_dogs
    }
  }
`;
