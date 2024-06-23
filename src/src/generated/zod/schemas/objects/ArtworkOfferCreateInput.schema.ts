import { z } from 'zod';
import { ContactCreateNestedOneWithoutOffersInputObjectSchema } from './ContactCreateNestedOneWithoutOffersInput.schema';
import { ArtworkCreateNestedOneWithoutOffersInputObjectSchema } from './ArtworkCreateNestedOneWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateInput> = z
  .object({
    amount: z.number(),
    discount: z.number().optional().nullable(),
    message: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutOffersInputObjectSchema),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutOffersInputObjectSchema),
  })
  .strict();

export const ArtworkOfferCreateInputObjectSchema = Schema;
