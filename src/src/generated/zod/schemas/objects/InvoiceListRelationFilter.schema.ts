import { z } from 'zod';
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => InvoiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => InvoiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => InvoiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceListRelationFilterObjectSchema = Schema;
