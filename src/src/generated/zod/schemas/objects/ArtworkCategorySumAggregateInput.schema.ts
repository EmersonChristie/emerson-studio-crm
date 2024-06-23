import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategorySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    mainImageId: z.literal(true).optional(),
  })
  .strict();

export const ArtworkCategorySumAggregateInputObjectSchema = Schema;
