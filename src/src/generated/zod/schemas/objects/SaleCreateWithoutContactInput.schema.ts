import { z } from 'zod';
import { ArtworkCreateNestedOneWithoutSalesInputObjectSchema } from './ArtworkCreateNestedOneWithoutSalesInput.schema';
import { InvoiceCreateNestedOneWithoutSalesInputObjectSchema } from './InvoiceCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutContactInput> = z
  .object({
    amount: z.number(),
    date: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentStatus: z.string().optional(),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutSalesInputObjectSchema),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutSalesInputObjectSchema).optional(),
  })
  .strict();

export const SaleCreateWithoutContactInputObjectSchema = Schema;
