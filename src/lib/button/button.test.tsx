import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';

describe('Button component', () => {
  test('Should be rendered', () => {
    render(<Button>test button</Button>);

    const button = screen.getByText('test button');
    expect(button).toBeVisible();
  });

  test('Should be called on click', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>test button</Button>);

    const button = screen.getByText('test button');
    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
