import { render, screen } from '@testing-library/react';

import Spinner from './spinner';

describe('Spinner component', () => {
  test('Should be rendered', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeVisible();
  });
});
