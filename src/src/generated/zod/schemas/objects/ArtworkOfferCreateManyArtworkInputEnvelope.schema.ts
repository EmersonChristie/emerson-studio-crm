import { z } from 'zod';
import { ArtworkOfferCreateManyArtworkInputObjectSchema } from './ArtworkOfferCreateManyArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateManyArtworkInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtworkOfferCreateManyArtworkInputObjectSchema),
      z.lazy(() => ArtworkOfferCreateManyArtworkInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtworkOfferCreateManyArtworkInputEnvelopeObjectSchema = Schema;
