import { z } from 'zod';
import { ContactCreateNestedOneWithoutSalesInputObjectSchema } from './ContactCreateNestedOneWithoutSalesInput.schema';
import { InvoiceCreateNestedOneWithoutSalesInputObjectSchema } from './InvoiceCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutArtworkInput> = z
  .object({
    amount: z.number(),
    date: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    paymentStatus: z.string().optional(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutSalesInputObjectSchema),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutSalesInputObjectSchema).optional(),
  })
  .strict();

export const SaleCreateWithoutArtworkInputObjectSchema = Schema;
