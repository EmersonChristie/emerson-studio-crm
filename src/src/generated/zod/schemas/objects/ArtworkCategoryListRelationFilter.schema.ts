import { z } from 'zod';
import { ArtworkCategoryWhereInputObjectSchema } from './ArtworkCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtworkCategoryWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtworkCategoryWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtworkCategoryWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryListRelationFilterObjectSchema = Schema;
