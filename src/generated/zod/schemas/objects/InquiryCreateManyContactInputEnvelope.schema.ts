import { z } from 'zod';
import { InquiryCreateManyContactInputObjectSchema } from './InquiryCreateManyContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateManyContactInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InquiryCreateManyContactInputObjectSchema),
      z.lazy(() => InquiryCreateManyContactInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InquiryCreateManyContactInputEnvelopeObjectSchema = Schema;
