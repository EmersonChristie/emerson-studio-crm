import { z } from 'zod';
import { ArtworkPrivateViewCreateManyCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtworkPrivateViewCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtworkPrivateViewCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
