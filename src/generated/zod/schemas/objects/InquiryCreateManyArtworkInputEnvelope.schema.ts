import { z } from 'zod';
import { InquiryCreateManyArtworkInputObjectSchema } from './InquiryCreateManyArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateManyArtworkInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InquiryCreateManyArtworkInputObjectSchema),
      z.lazy(() => InquiryCreateManyArtworkInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InquiryCreateManyArtworkInputEnvelopeObjectSchema = Schema;
