import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateManyInput> = z
  .object({
    id: z.number().optional(),
    subject: z.string(),
    content: z.string(),
    sentAt: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdById: z.number(),
    status: z.string().optional(),
    template: z.string().optional().nullable(),
  })
  .strict();

export const EmailCampaignCreateManyInputObjectSchema = Schema;
