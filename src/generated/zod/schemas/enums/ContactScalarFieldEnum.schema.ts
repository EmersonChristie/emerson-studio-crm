import { z } from 'zod';

export const ContactScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'phone',
  'address',
  'createdAt',
  'updatedAt',
  'notes',
]);
