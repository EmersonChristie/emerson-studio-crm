import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkPrivateViewCountOrderByAggregateInputObjectSchema } from './ArtworkPrivateViewCountOrderByAggregateInput.schema';
import { ArtworkPrivateViewAvgOrderByAggregateInputObjectSchema } from './ArtworkPrivateViewAvgOrderByAggregateInput.schema';
import { ArtworkPrivateViewMaxOrderByAggregateInputObjectSchema } from './ArtworkPrivateViewMaxOrderByAggregateInput.schema';
import { ArtworkPrivateViewMinOrderByAggregateInputObjectSchema } from './ArtworkPrivateViewMinOrderByAggregateInput.schema';
import { ArtworkPrivateViewSumOrderByAggregateInputObjectSchema } from './ArtworkPrivateViewSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ArtworkPrivateViewCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ArtworkPrivateViewAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtworkPrivateViewMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtworkPrivateViewMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtworkPrivateViewSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewOrderByWithAggregationInputObjectSchema = Schema;
