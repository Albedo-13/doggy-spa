import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

import { resolvers } from './resolvers';
import { dogTypeDefs } from './schemas/dog-schema';

// Создаем GraphQL сервер Apollo
const server = new ApolloServer({
  typeDefs: dogTypeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
