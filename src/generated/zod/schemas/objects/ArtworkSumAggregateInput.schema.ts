import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    mainImageId: z.literal(true).optional(),
  })
  .strict();

export const ArtworkSumAggregateInputObjectSchema = Schema;
