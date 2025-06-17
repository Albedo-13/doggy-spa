'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/lib/button/button';
import Calendar from '@/lib/calendar/calendar';
import CheckboxGroup from '@/lib/checkbox-group/checkbox-group';
import Input from '@/lib/input/input';
import InputArea from '@/lib/input-area/input-area';
import { bookingSchema } from '@/utils/validation-schemas';

import styles from './book-appointment-form.module.scss';

const PAYMENT_METHODS = [
  {
    id: 1,
    src: '/icons/payment-method-1.webp',
    alt: 'apple pay',
  },
  {
    id: 2,
    src: '/icons/payment-method-2.webp',
    alt: 'google pay',
  },
  {
    id: 3,
    src: '/icons/payment-method-3.webp',
    alt: 'visa',
  },
  {
    id: 4,
    src: '/icons/payment-method-4.webp',
    alt: 'mastercard',
  },
  {
    id: 5,
    src: '/icons/payment-method-5.webp',
    alt: 'amazon pay',
  },
];

const BOOK_TIME = [
  { key: '11am-12pm', value: '11 am - 12 pm' },
  { key: '12pm-1pm', value: '12 pm - 1 pm' },
  { key: '1pm-2pm', value: '1 pm - 2 pm' },
  { key: '3pm-4pm', value: '3 pm - 4 pm' },
  { key: '4pm-5pm', value: '4 pm - 5pm' },
];

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeslots: string[];
  calendar: Date;
  comment: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
};

export default function BookAppointmentForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(bookingSchema) });

  const onSubmit = async (data: FormInputs) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapper}>
          <Input
            {...register('firstName')}
            error={errors?.firstName}
            block
            placeholder="First Name"
          />
          <Input
            {...register('lastName')}
            error={errors?.lastName}
            block
            placeholder="Last Name"
          />
          <Input
            {...register('email')}
            type="email"
            error={errors?.email}
            block
            placeholder="Email"
          />
          <Input
            {...register('phone')}
            error={errors?.phone}
            block
            placeholder="Phone number"
          />
          <Controller
            control={control}
            name="timeslots"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                options={BOOK_TIME}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const id = e.target.id;
                  const currentValues = value || [];

                  if (e.target.checked) {
                    onChange([...currentValues, id]);
                  } else {
                    onChange(
                      currentValues.filter((item: string) => item !== id),
                    );
                  }
                }}
                label="Choose a timeslot"
                error={errors?.timeslots}
              />
            )}
          />
          <Controller
            control={control}
            name="calendar"
            render={({ field: { onChange } }) => (
              <Calendar
                onChange={onChange}
                error={errors.calendar}
              />
            )}
          />
        </div>
        <InputArea
          {...register('comment')}
          error={errors?.comment}
          className={clsx(styles.textarea, styles.gap)}
          block
          placeholder="Your message goes here ..."
        />

        <h2 className={styles.title}>Enter your payment information</h2>
        <Input
          {...register('cardNumber')}
          error={errors?.cardNumber}
          block
          placeholder="Credit Card Number"
        />
        <div className={styles.wrapper}>
          <Input
            {...register('expiryDate')}
            error={errors?.expiryDate}
            block
            placeholder="Expiry Date"
            classNameWrapper={styles.gap}
          />
          <Input
            {...register('cvv')}
            error={errors?.cvv}
            block
            placeholder="CVV"
            classNameWrapper={styles.gap}
          />
        </div>
        <Input
          {...register('cardName')}
          error={errors?.cardName}
          block
          placeholder="Name on Card"
          className={styles.gap}
        />
        <div className={clsx(styles.paymentGroup, styles.gap)}>
          {PAYMENT_METHODS.map(({ id, src, alt }) => (
            <Image key={id} src={src} alt={alt} width={34} height={24} />
          ))}
        </div>
        <p className={styles.note}>
          Please be advised cancelling within 24 hours of your scheduled
          appointment will result in a cancellation fee of $300.00.
        </p>

        <Button
          className={styles.submit}
          disabled={isSubmitting}
          type="submit"
          size="large"
        >
          Book Appointment
        </Button>
      </form>
    </section>
  );
}
