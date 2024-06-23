import { z } from 'zod';

export const SaleScalarFieldEnumSchema = z.enum([
  'id',
  'amount',
  'date',
  'createdAt',
  'updatedAt',
  'contactId',
  'artworkId',
  'invoiceId',
  'paymentStatus',
]);
