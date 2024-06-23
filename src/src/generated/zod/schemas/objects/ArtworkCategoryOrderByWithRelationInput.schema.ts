import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkOrderByRelationAggregateInputObjectSchema } from './ArtworkOrderByRelationAggregateInput.schema';
import { ImageOrderByWithRelationInputObjectSchema } from './ImageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artworks: z.lazy(() => ArtworkOrderByRelationAggregateInputObjectSchema).optional(),
    mainImage: z.lazy(() => ImageOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryOrderByWithRelationInputObjectSchema = Schema;
