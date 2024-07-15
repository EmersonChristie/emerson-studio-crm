import { email } from 'envalid';
import { z } from 'zod';

export const commonValidations = {
  // id: z
  //   .string()
  //   .refine((data) => !isNaN(Number(data)), 'ID must be a numeric value')
  //   .transform(Number)
  //   .refine((num) => num > 0, 'ID must be a positive number'),
  id: z
    .string()
    .refine((data) => !isNaN(Number(data)), 'ID must be a numeric value')
    .transform(Number)
    .refine((num) => Number.isInteger(num) && num > 0, 'ID must be a positive integer'),
  idArray: z.array(z.number().int().positive()),
  email: z.string().email(),
  password: z.string(),

  // ... other common validations
};
