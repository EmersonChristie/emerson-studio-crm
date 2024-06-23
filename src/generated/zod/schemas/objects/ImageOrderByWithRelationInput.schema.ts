import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkOrderByWithRelationInputObjectSchema } from './ArtworkOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    altText: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isMain: z.lazy(() => SortOrderSchema).optional(),
    artworkMain: z.lazy(() => ArtworkOrderByWithRelationInputObjectSchema).optional(),
    artwork: z.lazy(() => ArtworkOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ImageOrderByWithRelationInputObjectSchema = Schema;
