import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    url: z.literal(true).optional(),
    altText: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    artworkId: z.literal(true).optional(),
    isMain: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ImageCountAggregateInputObjectSchema = Schema;
