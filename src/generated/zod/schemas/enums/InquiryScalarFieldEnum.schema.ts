import { z } from 'zod';

export const InquiryScalarFieldEnumSchema = z.enum([
  'id',
  'message',
  'createdAt',
  'updatedAt',
  'artworkId',
  'contactId',
  'status',
]);
