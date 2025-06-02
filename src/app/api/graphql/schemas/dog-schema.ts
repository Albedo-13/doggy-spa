import { gql } from '@apollo/client';

// Определяем схему GraphQL
export const dogTypeDefs = gql`
  type Dog {
    image_link: String!
    good_with_children: Int!
    good_with_other_dogs: Int!
    shedding: Int!
    grooming: Int!
    drooling: Int!
    coat_length: Int!
    good_with_strangers: Int!
    playfulness: Int!
    protectiveness: Int!
    trainability: Int!
    energy: Int!
    barking: Int!
    min_life_expectancy: Int!
    max_life_expectancy: Int!
    max_height_male: Int!
    max_height_female: Int!
    max_weight_male: Int!
    max_weight_female: Int!
    min_height_male: Int!
    min_height_female: Int!
    min_weight_male: Int!
    min_weight_female: Int!
    name: String!
  }

  type Query {
    dogs(name: String!): [Dog]
  }
`;
