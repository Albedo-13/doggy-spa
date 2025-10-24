import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FooterForm from './footer-form';

describe('Footer sign up form', () => {
  test('Should be rendered', () => {
    render(<FooterForm />);

    expect(screen.getByTestId('footer-form')).toBeInTheDocument();
  });

  test('Should show error on wrong email', async () => {
    render(<FooterForm />);

    await userEvent.type(screen.getByPlaceholderText('Email'), 'wrong email');
    await userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.getByText('email must be a valid email');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Should call emailjs on valid submit', async () => {
    render(<FooterForm />);

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'valid@email.com',
    );
    await userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.queryByText('email must be a valid email');
    expect(errorMessage).not.toBeInTheDocument();

    // request on form submit
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      { method: 'POST' },
    );
    expect(response.text()).resolves.toBe('OK');
    expect(response.status).toBe(200);
  });
});
