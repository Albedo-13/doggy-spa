"use client";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import Button from "@/lib/button/button";
import Input from "@/lib/input/input";
import { subscribeSchema } from "@/utils/validation-schemas";

import styles from "./modal-sign-up.module.scss";

type FormInputs = {
  email: string;
};

type SingUpFormProps = {
  closeModal: VoidFunction;
};

export default function SignUpForm({ closeModal }: SingUpFormProps) {
  const form = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(subscribeSchema) });

  const onSubmit = async (data: FormInputs) => {
    console.log(data);

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
          closeModal();
        });
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        {...register("email")}
        type="text"
        placeholder="Email"
        className={styles.input}
        error={errors.email}
      />
      <Button
        className={styles.button}
        disabled={isSubmitting}
        type="submit"
        size="small"
      >
        Sign Up
      </Button>
    </form>
  );
}
