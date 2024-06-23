import { z } from 'zod';
import { ArtworkCategoryWhereInputObjectSchema } from './ArtworkCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArtworkCategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArtworkCategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArtworkCategoryRelationFilterObjectSchema = Schema;
