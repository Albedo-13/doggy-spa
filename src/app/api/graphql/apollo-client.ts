import { ApolloClient, InMemoryCache } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { HttpLink } from '@apollo/client/link/http';

const httpLink = new HttpLink({
  uri: '/api/graphql',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

if (process.env.NODE_ENV === 'development') {
  loadDevMessages();
  loadErrorMessages();
}