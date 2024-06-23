import { z } from 'zod';
import { UserCreateNestedOneWithoutEmailCampaignsInputObjectSchema } from './UserCreateNestedOneWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateWithoutContactsInput> = z
  .object({
    subject: z.string(),
    content: z.string(),
    sentAt: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    template: z.string().optional().nullable(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutEmailCampaignsInputObjectSchema),
  })
  .strict();

export const EmailCampaignCreateWithoutContactsInputObjectSchema = Schema;
