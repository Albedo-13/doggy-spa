import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './input';

describe('Input component', () => {
  test('Should be rendered', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');
    expect(input).toBeVisible();
  });

  test('Should be called on change', async () => {
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });

  test('Should show error when error prop is passed', () => {
    render(<Input error={{ type: '', message: 'error message' }} />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).toHaveTextContent('error message');
  });
});
