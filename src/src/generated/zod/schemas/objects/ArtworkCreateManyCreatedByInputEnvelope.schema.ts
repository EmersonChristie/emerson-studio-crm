import { z } from 'zod';
import { ArtworkCreateManyCreatedByInputObjectSchema } from './ArtworkCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtworkCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ArtworkCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtworkCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
