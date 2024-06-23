import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutSalesInput> = z
  .object({
    id: z.number().optional(),
    total: z.number(),
    issuedDate: z.coerce.date(),
    dueDate: z.coerce.date(),
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdById: z.number(),
    paymentUrl: z.string().optional().nullable(),
    taxPercentage: z.number().optional().nullable(),
    discountPercentage: z.number().optional().nullable(),
  })
  .strict();

export const InvoiceUncheckedCreateWithoutSalesInputObjectSchema = Schema;
