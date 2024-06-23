import { z } from 'zod';
import { ContactCreateNestedOneWithoutSalesInputObjectSchema } from './ContactCreateNestedOneWithoutSalesInput.schema';
import { ArtworkCreateNestedOneWithoutSalesInputObjectSchema } from './ArtworkCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutInvoiceInput> = z
  .object({
    amount: z.number(),
    date: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentStatus: z.string().optional(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutSalesInputObjectSchema),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutSalesInputObjectSchema),
  })
  .strict();

export const SaleCreateWithoutInvoiceInputObjectSchema = Schema;
