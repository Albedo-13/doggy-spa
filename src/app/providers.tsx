'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

import { client } from './api/graphql/apollo-client';

type RootContextProps = {
  children: ReactNode;
};

export default function RootContext({ children }: RootContextProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
