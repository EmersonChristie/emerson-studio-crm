import { z } from 'zod';
import { SaleCreateManyArtworkInputObjectSchema } from './SaleCreateManyArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyArtworkInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyArtworkInputObjectSchema),
      z.lazy(() => SaleCreateManyArtworkInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyArtworkInputEnvelopeObjectSchema = Schema;
