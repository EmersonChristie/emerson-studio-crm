import { z } from 'zod';

export const ContactScalarFieldEnumSchema = z.enum([
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'createdAt',
  'updatedAt',
  'createdById',
  'notes',
  'source',
]);
