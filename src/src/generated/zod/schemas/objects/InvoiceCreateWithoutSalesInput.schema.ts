import { z } from 'zod';
import { UserCreateNestedOneWithoutInvoicesInputObjectSchema } from './UserCreateNestedOneWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutSalesInput> = z
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
    createdBy: z.lazy(() => UserCreateNestedOneWithoutInvoicesInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateWithoutSalesInputObjectSchema = Schema;
