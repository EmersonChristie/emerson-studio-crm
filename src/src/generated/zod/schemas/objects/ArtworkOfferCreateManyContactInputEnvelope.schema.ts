import { z } from 'zod';
import { ArtworkOfferCreateManyContactInputObjectSchema } from './ArtworkOfferCreateManyContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateManyContactInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtworkOfferCreateManyContactInputObjectSchema),
      z.lazy(() => ArtworkOfferCreateManyContactInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtworkOfferCreateManyContactInputEnvelopeObjectSchema = Schema;
