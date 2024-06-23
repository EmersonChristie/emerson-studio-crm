import { z } from 'zod';
import { InvoiceCreateManyCreatedByInputObjectSchema } from './InvoiceCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvoiceCreateManyCreatedByInputObjectSchema),
      z.lazy(() => InvoiceCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
