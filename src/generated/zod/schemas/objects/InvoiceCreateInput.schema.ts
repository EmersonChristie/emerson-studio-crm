import { z } from 'zod';
import { SaleCreateNestedManyWithoutInvoiceInputObjectSchema } from './SaleCreateNestedManyWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateInput> = z
  .object({
    total: z.number(),
    issuedDate: z.coerce.date(),
    dueDate: z.coerce.date(),
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentUrl: z.string().optional().nullable(),
    tax: z.number().optional().nullable(),
    discount: z.number().optional().nullable(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateInputObjectSchema = Schema;
