"use client";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import Button from "@/lib/button/button";
import Input from "@/lib/input/input";
import InputArea from "@/lib/input-area/input-area";
import { contactUsSchema } from "@/utils/validation-schemas";

import styles from "./contact-spa.module.scss";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
};

export default function ContactSpaForm() {
  const form = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(contactUsSchema) });

  const onSubmit = async (data: FormInputs) => {
    const emailData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      comment: data.comment,
    };

    if (form.current) {
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_BOOKING_ID_TEMPLATE!,
          {
            ...emailData,
            title: "Запрос обратной связи",
            comment: emailData.comment && `Комментарий: ${emailData.comment}`,
          },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          },
        )
        .then(() => reset());
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <Input
          {...register("firstName")}
          error={errors?.firstName}
          block
          placeholder="First Name"
        />
        <Input
          {...register("lastName")}
          error={errors?.lastName}
          block
          placeholder="Last Name"
        />
        <Input
          {...register("email")}
          type="email"
          error={errors?.email}
          block
          placeholder="Email"
        />
        <Input
          {...register("phone")}
          error={errors?.phone}
          block
          placeholder="Phone number"
        />
      </div>
      <InputArea
        {...register("comment")}
        error={errors?.comment}
        className={styles.textarea}
        block
        placeholder="Your message goes here ..."
      />
      <Button
        className={styles.submit}
        disabled={isSubmitting}
        type="submit"
        size="large"
      >
        Submit
      </Button>
    </form>
  );
}
