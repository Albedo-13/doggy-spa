import * as yup from 'yup';

import { phoneRegExp } from './phone-regexp';

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

export const searchDogSchema = yup.object({
  searchDogName: yup
    .string()
    .test(
      'length',
      'Should be least 3 chars',
      (val) => !!val && val.length >= 3
    )
    .required(),
});

export const subscribeSchema = yup.object({
  email: yup.string().email().required("Field 'Email' is required"),
});
