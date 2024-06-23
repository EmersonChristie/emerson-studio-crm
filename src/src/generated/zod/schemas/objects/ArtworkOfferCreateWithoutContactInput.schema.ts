import { z } from 'zod';
import { ArtworkCreateNestedOneWithoutOffersInputObjectSchema } from './ArtworkCreateNestedOneWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateWithoutContactInput> = z
  .object({
    amount: z.number(),
    discount: z.number().optional().nullable(),
    message: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutOffersInputObjectSchema),
  })
  .strict();

export const ArtworkOfferCreateWithoutContactInputObjectSchema = Schema;
