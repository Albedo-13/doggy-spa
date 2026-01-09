import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InfoDog from './info-dog';

describe('Info dog component (search dogs)', () => {
  const httpLink = new HttpLink({
    uri: '/api/graphql',
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  test('Should render searched dog from MSW', async () => {
    render(
      <ApolloProvider client={client}>
        <InfoDog id="Broholmer" />
      </ApolloProvider>,
    );

    expect(await screen.findByText('Broholmer')).toBeInTheDocument();
    expect(screen.getByText('Energy: 2')).toBeInTheDocument();
    expect(screen.getByText('Min Life Expectancy: 8')).toBeInTheDocument();
    expect(screen.getByText('Good with Strangers: 3')).toBeInTheDocument();
    expect(screen.getByText('Good with Other Dogs: 3')).toBeInTheDocument();
  });

  test('Should change input & sorts correctly', async () => {
    render(
      <ApolloProvider client={client}>
        <InfoDog id="Broholmer" />
      </ApolloProvider>,
    );

    expect(await screen.findByText('Broholmer')).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'Pembroke');
    expect(await screen.findByText('Pembroke Welsh Corgi')).toBeInTheDocument();

    const searchResults = screen.getAllByRole('link');
    expect(searchResults).toHaveLength(1);
  });

  test('Should show 404 not found if id is not valid', async () => {
    render(
      <ApolloProvider client={client}>
        <InfoDog id="some random dog name that doesn't exist" />
      </ApolloProvider>,
    );

    expect(await screen.findByText('404')).toBeInTheDocument();
  });
});
