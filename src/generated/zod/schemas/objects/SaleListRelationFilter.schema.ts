import { z } from 'zod';
import { SaleWhereInputObjectSchema } from './SaleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleListRelationFilter> = z
  .object({
    every: z.lazy(() => SaleWhereInputObjectSchema).optional(),
    some: z.lazy(() => SaleWhereInputObjectSchema).optional(),
    none: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleListRelationFilterObjectSchema = Schema;
