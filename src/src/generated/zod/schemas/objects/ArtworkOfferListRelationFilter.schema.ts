import { z } from 'zod';
import { ArtworkOfferWhereInputObjectSchema } from './ArtworkOfferWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtworkOfferWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtworkOfferWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtworkOfferWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOfferListRelationFilterObjectSchema = Schema;
