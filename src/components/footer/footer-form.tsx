'use client';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/lib/button/button';
import Input from '@/lib/input/input';
import { SignUpFormInputs } from '@/types/forms';
import { subscribeSchema } from '@/utils/validation-schemas';

import styles from './footer.module.scss';

export default function FooterForm() {
  const form = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>({ resolver: yupResolver(subscribeSchema) });

  const onSubmit = async (data: SignUpFormInputs) => {
    const emailData = {
      email: data.email,
    };

    if (form.current) {
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIPTION_ID_TEMPLATE!,
          emailData,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          },
        )
        .then(() => {
          reset();
        });
    }
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      data-testid="footer-form"
    >
      <Input
        {...register('email')}
        error={errors.email}
        type="text"
        placeholder="Email"
        className={styles.input}
      />
      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
