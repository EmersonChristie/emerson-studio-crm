import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutContactInput> = z
  .object({
    id: z.number().optional(),
    amount: z.number(),
    date: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworkId: z.number(),
    invoiceId: z.number().optional().nullable(),
    paymentStatus: z.string().optional(),
  })
  .strict();

export const SaleUncheckedCreateWithoutContactInputObjectSchema = Schema;
