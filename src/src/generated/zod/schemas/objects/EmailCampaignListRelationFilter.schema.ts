import { z } from 'zod';
import { EmailCampaignWhereInputObjectSchema } from './EmailCampaignWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignListRelationFilter> = z
  .object({
    every: z.lazy(() => EmailCampaignWhereInputObjectSchema).optional(),
    some: z.lazy(() => EmailCampaignWhereInputObjectSchema).optional(),
    none: z.lazy(() => EmailCampaignWhereInputObjectSchema).optional(),
  })
  .strict();

export const EmailCampaignListRelationFilterObjectSchema = Schema;
