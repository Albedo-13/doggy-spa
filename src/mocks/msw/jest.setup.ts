import '@testing-library/jest-dom';

import nextEnv from '@next/env';

import { server } from './server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

if (process.env.NODE_ENV === 'development') {
  import('./browser').then(({ worker }) => worker.start());
}

nextEnv.loadEnvConfig(process.cwd());
