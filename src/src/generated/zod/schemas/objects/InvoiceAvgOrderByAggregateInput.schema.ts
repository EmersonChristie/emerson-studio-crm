import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    taxPercentage: z.lazy(() => SortOrderSchema).optional(),
    discountPercentage: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvoiceAvgOrderByAggregateInputObjectSchema = Schema;
