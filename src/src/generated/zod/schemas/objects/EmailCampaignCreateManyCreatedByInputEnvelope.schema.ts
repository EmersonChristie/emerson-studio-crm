import { z } from 'zod';
import { EmailCampaignCreateManyCreatedByInputObjectSchema } from './EmailCampaignCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EmailCampaignCreateManyCreatedByInputObjectSchema),
      z.lazy(() => EmailCampaignCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EmailCampaignCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
