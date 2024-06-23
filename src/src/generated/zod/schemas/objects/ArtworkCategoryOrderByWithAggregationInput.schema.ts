import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkCategoryCountOrderByAggregateInputObjectSchema } from './ArtworkCategoryCountOrderByAggregateInput.schema';
import { ArtworkCategoryAvgOrderByAggregateInputObjectSchema } from './ArtworkCategoryAvgOrderByAggregateInput.schema';
import { ArtworkCategoryMaxOrderByAggregateInputObjectSchema } from './ArtworkCategoryMaxOrderByAggregateInput.schema';
import { ArtworkCategoryMinOrderByAggregateInputObjectSchema } from './ArtworkCategoryMinOrderByAggregateInput.schema';
import { ArtworkCategorySumOrderByAggregateInputObjectSchema } from './ArtworkCategorySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ArtworkCategoryCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ArtworkCategoryAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtworkCategoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtworkCategoryMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtworkCategorySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryOrderByWithAggregationInputObjectSchema = Schema;
