import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HeaderLink from './header-link';

describe('Header link component', () => {
  const onClickMock = jest.fn();

  it('Should be rendered', () => {
    render(
      <HeaderLink
        href="https://www.google.com"
        title="Google"
        onClick={onClickMock}
      />,
    );

    expect(screen.getByText('Google')).toBeInTheDocument();
  });

  it('Should be called on click', async () => {
    render(
      <HeaderLink
        href="https://www.google.com"
        title="Google"
        onClick={onClickMock}
      />,
    );

    const homeLink = screen.getByText('Google');
    await userEvent.click(homeLink);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
