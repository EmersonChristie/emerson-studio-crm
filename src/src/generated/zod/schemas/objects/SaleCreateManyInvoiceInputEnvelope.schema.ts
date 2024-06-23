import { z } from 'zod';
import { SaleCreateManyInvoiceInputObjectSchema } from './SaleCreateManyInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyInvoiceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyInvoiceInputObjectSchema),
      z.lazy(() => SaleCreateManyInvoiceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyInvoiceInputEnvelopeObjectSchema = Schema;
