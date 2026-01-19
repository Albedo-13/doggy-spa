import { jest } from '@jest/globals';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useModal } from '@/hooks/use-modal';

import SignUpForm from './modal-sign-up-form';

describe('Modal sign up form', () => {
  test('Should be rendered', () => {
    render(<SignUpForm closeModal={jest.fn()} />);

    expect(screen.getByTestId('modal-sign-up-form')).toBeInTheDocument();
  });

  test('Should show error message on wrong email', async () => {
    render(<SignUpForm closeModal={jest.fn()} />);

    await userEvent.type(screen.getByPlaceholderText('Email'), 'wrong email');
    await userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.getByText('email must be a valid email');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Should call emailjs & closeModal on valid submit', async () => {
    const modalHook = renderHook(() => useModal(true)).result;
    const closeModalMock = jest.fn(modalHook.current.closeModal);

    // modal is always open if SignUpForm rendered
    render(<SignUpForm closeModal={closeModalMock} />);

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'valid@email.com',
    );
    expect(await screen.getByPlaceholderText('Email')).toHaveValue(
      'valid@email.com',
    );
    await userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.queryByText('email must be a valid email');
    expect(errorMessage).not.toBeInTheDocument();

    // empty means that form is submitted and cleared successfully
    expect(await screen.getByPlaceholderText('Email')).toHaveValue('');

    // request on form submit
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      { method: 'POST' },
    );
    expect(response.text()).resolves.toBe('OK');
    expect(response.status).toBe(200);
    expect(closeModalMock).toHaveBeenCalled();
  });
});
