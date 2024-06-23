import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ImageCountOrderByAggregateInputObjectSchema } from './ImageCountOrderByAggregateInput.schema';
import { ImageAvgOrderByAggregateInputObjectSchema } from './ImageAvgOrderByAggregateInput.schema';
import { ImageMaxOrderByAggregateInputObjectSchema } from './ImageMaxOrderByAggregateInput.schema';
import { ImageMinOrderByAggregateInputObjectSchema } from './ImageMinOrderByAggregateInput.schema';
import { ImageSumOrderByAggregateInputObjectSchema } from './ImageSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    altText: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isMain: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ImageCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ImageAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ImageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ImageMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ImageSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ImageOrderByWithAggregationInputObjectSchema = Schema;
