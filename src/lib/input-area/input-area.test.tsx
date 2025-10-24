import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputArea from './input-area';

describe('InputArea component', () => {
  test('Should be rendered', () => {
    render(<InputArea />);

    const input = screen.getByRole('textbox');
    expect(input).toBeVisible();
  });

  test('Should be called on change', async () => {
    const onChangeMock = jest.fn();
    render(<InputArea onChange={onChangeMock} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });

  test('Should show error when required', () => {
    render(<InputArea error={{ type: '', message: 'error message' }} />);

    expect(screen.getByText('error message')).toBeInTheDocument();
  });
});
