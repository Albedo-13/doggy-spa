import '@testing-library/jest-dom';

import { expect, jest, test } from '@jest/globals';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useModal } from '@/hooks/use-modal';

import SignUpForm from './modal-sign-up-form';

describe('Modal sign up form', () => {
  test('Should be rendered', () => {
    const modalHook = renderHook(() => useModal(true)).result;
    render(<SignUpForm closeModal={modalHook.current.closeModal} />);

    expect(screen.getByTestId('modal-sign-up-form')).toBeInTheDocument();
  });

  test('Should call closeModal on valid submit', async () => {
    const modalHook = renderHook(() => useModal(true)).result;
    const closeModalSpy = jest.spyOn(modalHook.current, 'closeModal');

    // modal is always open if SignUpForm rendered
    render(<SignUpForm closeModal={closeModalSpy} />);

    await userEvent.type(screen.getByPlaceholderText('Email'), 'test@test.com');
    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      const errorMessage = screen.queryByText('email must be a valid email');
      expect(errorMessage).not.toBeInTheDocument();
    });

    // expect(screen.getByTestId('modal-sign-up-form')).toHaveBeenCalledTimes(1);

    expect(closeModalSpy).toHaveBeenCalled();

    // await waitFor(() => {
    //   const modal = screen.queryByTestId('modal-sign-up-form');
    //   expect(modal).not.toBeInTheDocument();
    // });

    screen.debug();
  });

  test('Should show error message on wrong email', async () => {
    const modalHook = renderHook(() => useModal(true)).result;
    render(<SignUpForm closeModal={modalHook.current.closeModal} />);

    await userEvent.type(screen.getByPlaceholderText('Email'), 'wrong email');
    await userEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    const errorMessage = await screen.findByText('email must be a valid email');
    expect(errorMessage).toBeInTheDocument();
  });
});
