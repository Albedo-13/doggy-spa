import * as yup from 'yup';

import {
  cardNumberRegExp,
  cvvRegExp,
  expiryDateRegExp,
  phoneRegExp,
} from './regexps';

export const contactUsSchema = yup.object({
  firstName: yup.string().required("Field 'First Name' is required"),
  lastName: yup.string().required("Field 'Last Name' is required"),
  email: yup.string().email().required("Field 'Email' is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Field must be correct phone number')
    .required("Field 'Phone' is required"),
  comment: yup.string().optional().default(''),
});

export const bookingSchema = yup.object({
  firstName: yup.string().required("Field 'First Name' is required"),
  lastName: yup.string().required("Field 'Last Name' is required"),
  email: yup.string().email().required("Field 'Email' is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Field must be correct phone number')
    .required("Field 'Phone' is required"),
  timeslots: yup
    .array()
    .of(yup.string().defined())
    .min(1, 'At least one timeslot must be selected')
    .required('At least one timeslot must be selected'),
  calendar: yup.date().required('Choose the date'),
  comment: yup.string().optional().default(''),
  cardNumber: yup
    .string()
    .matches(cardNumberRegExp, 'Card number must be 16 digits')
    .required("Field 'Credit Card Number' is required"),
  expiryDate: yup
    .string()
    .matches(expiryDateRegExp, 'Expiry date must be in MM/YY format')
    .required("Field 'Expiry Date' is required"),
  cvv: yup
    .string()
    .matches(cvvRegExp, 'CVV must be 3 or 4 digits')
    .required("Field 'CVV' is required"),
  cardName: yup.string().required("Field 'Name on Card' is required"),
});

export const searchDogSchema = yup.object({
  searchDogName: yup
    .string()
    .test(
      'length',
      'Should be least 3 chars',
      (val) => !!val && val.length >= 3,
    )
    .required(),
});

export const subscribeSchema = yup.object({
  email: yup.string().email().required("Field 'Email' is required"),
});
