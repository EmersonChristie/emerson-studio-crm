import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategorySumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArtworkCategorySumOrderByAggregateInputObjectSchema = Schema;
