import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkCountOrderByAggregateInputObjectSchema } from './ArtworkCountOrderByAggregateInput.schema';
import { ArtworkAvgOrderByAggregateInputObjectSchema } from './ArtworkAvgOrderByAggregateInput.schema';
import { ArtworkMaxOrderByAggregateInputObjectSchema } from './ArtworkMaxOrderByAggregateInput.schema';
import { ArtworkMinOrderByAggregateInputObjectSchema } from './ArtworkMinOrderByAggregateInput.schema';
import { ArtworkSumOrderByAggregateInputObjectSchema } from './ArtworkSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artist: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ArtworkCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ArtworkAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtworkMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtworkMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtworkSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOrderByWithAggregationInputObjectSchema = Schema;
