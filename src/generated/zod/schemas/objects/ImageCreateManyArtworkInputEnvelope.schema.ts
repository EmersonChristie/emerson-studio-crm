import { z } from 'zod';
import { ImageCreateManyArtworkInputObjectSchema } from './ImageCreateManyArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateManyArtworkInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ImageCreateManyArtworkInputObjectSchema),
      z.lazy(() => ImageCreateManyArtworkInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ImageCreateManyArtworkInputEnvelopeObjectSchema = Schema;
