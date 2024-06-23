import { z } from 'zod';
import { ContactCreateNestedOneWithoutOffersInputObjectSchema } from './ContactCreateNestedOneWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateWithoutArtworkInput> = z
  .object({
    amount: z.number(),
    discount: z.number().optional().nullable(),
    message: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutOffersInputObjectSchema),
  })
  .strict();

export const ArtworkOfferCreateWithoutArtworkInputObjectSchema = Schema;
