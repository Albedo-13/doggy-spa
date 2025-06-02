import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { resolvers } from './resolvers';
import { dogTypeDefs } from './schemas/dog-schema';

// Создаем GraphQL сервер Apollo
const server = new ApolloServer({
  typeDefs: { ...dogTypeDefs },
  resolvers: { ...resolvers },
});

export const GET = startServerAndCreateNextHandler(server);
export const POST = startServerAndCreateNextHandler(server);
