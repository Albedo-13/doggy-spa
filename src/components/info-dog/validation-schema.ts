import * as yup from 'yup';

export const searchSchema = yup.object({
  searchDogName: yup
    .string()
    .test('length', 'Should be least 3 chars', (val) => !!val && val.length >= 3)
    .required(),
});
