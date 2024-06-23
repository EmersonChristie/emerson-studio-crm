import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    discount: z.literal(true).optional(),
    message: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
    artworkId: z.literal(true).optional(),
  })
  .strict();

export const ArtworkOfferMinAggregateInputObjectSchema = Schema;
