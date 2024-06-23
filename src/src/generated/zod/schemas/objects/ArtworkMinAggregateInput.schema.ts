import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    artist: z.literal(true).optional(),
    status: z.literal(true).optional(),
    mainImageId: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
  })
  .strict();

export const ArtworkMinAggregateInputObjectSchema = Schema;
