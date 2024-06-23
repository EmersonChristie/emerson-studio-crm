import { z } from 'zod';
import { SaleUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    total: z.number(),
    issuedDate: z.coerce.date(),
    dueDate: z.coerce.date(),
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentUrl: z.string().optional().nullable(),
    tax: z.number().optional().nullable(),
    discount: z.number().optional().nullable(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceUncheckedCreateInputObjectSchema = Schema;
