import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'total',
  'issuedDate',
  'dueDate',
  'status',
  'createdAt',
  'updatedAt',
  'createdById',
  'paymentUrl',
  'taxPercentage',
  'discountPercentage',
]);
