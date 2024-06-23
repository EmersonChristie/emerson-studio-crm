import { z } from 'zod';
import { SaleCreateNestedManyWithoutInvoiceInputObjectSchema } from './SaleCreateNestedManyWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutCreatedByInput> = z
  .object({
    total: z.number(),
    issuedDate: z.coerce.date(),
    dueDate: z.coerce.date(),
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentUrl: z.string().optional().nullable(),
    taxPercentage: z.number().optional().nullable(),
    discountPercentage: z.number().optional().nullable(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateWithoutCreatedByInputObjectSchema = Schema;
