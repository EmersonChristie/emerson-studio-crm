import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    mainImageId: z.literal(true).optional(),
  })
  .strict();

export const ArtworkCategoryAvgAggregateInputObjectSchema = Schema;
