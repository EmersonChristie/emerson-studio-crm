import { z } from 'zod';
import { ContactUncheckedCreateNestedManyWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUncheckedCreateWithoutCreatedByInput> = z
  .object({
    id: z.number().optional(),
    subject: z.string(),
    content: z.string(),
    sentAt: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    template: z.string().optional().nullable(),
    contacts: z.lazy(() => ContactUncheckedCreateNestedManyWithoutEmailCampaignsInputObjectSchema).optional(),
  })
  .strict();

export const EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema = Schema;