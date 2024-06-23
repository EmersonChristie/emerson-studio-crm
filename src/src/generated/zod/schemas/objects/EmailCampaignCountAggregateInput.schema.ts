import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    subject: z.literal(true).optional(),
    content: z.literal(true).optional(),
    sentAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    status: z.literal(true).optional(),
    template: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EmailCampaignCountAggregateInputObjectSchema = Schema;