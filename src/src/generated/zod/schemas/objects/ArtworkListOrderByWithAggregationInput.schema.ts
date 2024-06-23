import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtworkListCountOrderByAggregateInputObjectSchema } from './ArtworkListCountOrderByAggregateInput.schema';
import { ArtworkListAvgOrderByAggregateInputObjectSchema } from './ArtworkListAvgOrderByAggregateInput.schema';
import { ArtworkListMaxOrderByAggregateInputObjectSchema } from './ArtworkListMaxOrderByAggregateInput.schema';
import { ArtworkListMinOrderByAggregateInputObjectSchema } from './ArtworkListMinOrderByAggregateInput.schema';
import { ArtworkListSumOrderByAggregateInputObjectSchema } from './ArtworkListSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ArtworkListCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ArtworkListAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtworkListMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtworkListMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtworkListSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkListOrderByWithAggregationInputObjectSchema = Schema;
