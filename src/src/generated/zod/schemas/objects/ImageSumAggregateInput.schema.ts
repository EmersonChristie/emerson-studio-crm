import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    artworkId: z.literal(true).optional(),
  })
  .strict();

export const ImageSumAggregateInputObjectSchema = Schema;
