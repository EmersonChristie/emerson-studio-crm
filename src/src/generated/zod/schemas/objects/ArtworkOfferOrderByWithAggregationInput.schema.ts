import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkOfferCountOrderByAggregateInputObjectSchema } from './ArtworkOfferCountOrderByAggregateInput.schema';
import { ArtworkOfferAvgOrderByAggregateInputObjectSchema } from './ArtworkOfferAvgOrderByAggregateInput.schema';
import { ArtworkOfferMaxOrderByAggregateInputObjectSchema } from './ArtworkOfferMaxOrderByAggregateInput.schema';
import { ArtworkOfferMinOrderByAggregateInputObjectSchema } from './ArtworkOfferMinOrderByAggregateInput.schema';
import { ArtworkOfferSumOrderByAggregateInputObjectSchema } from './ArtworkOfferSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    discount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    message: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ArtworkOfferCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ArtworkOfferAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArtworkOfferMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtworkOfferMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArtworkOfferSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOfferOrderByWithAggregationInputObjectSchema = Schema;
