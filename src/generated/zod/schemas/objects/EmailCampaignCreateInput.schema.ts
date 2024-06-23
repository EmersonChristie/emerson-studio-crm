import { z } from 'zod';
import { ContactCreateNestedManyWithoutEmailCampaignsInputObjectSchema } from './ContactCreateNestedManyWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateInput> = z
  .object({
    subject: z.string(),
    content: z.string(),
    sentAt: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    template: z.string().optional().nullable(),
    contacts: z.lazy(() => ContactCreateNestedManyWithoutEmailCampaignsInputObjectSchema).optional(),
  })
  .strict();

export const EmailCampaignCreateInputObjectSchema = Schema;
