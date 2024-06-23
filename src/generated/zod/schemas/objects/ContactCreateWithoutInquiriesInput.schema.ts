import { z } from 'zod';
import { EmailCampaignCreateNestedManyWithoutContactsInputObjectSchema } from './EmailCampaignCreateNestedManyWithoutContactsInput.schema';
import { SaleCreateNestedManyWithoutContactInputObjectSchema } from './SaleCreateNestedManyWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateWithoutInquiriesInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
    emailCampaigns: z.lazy(() => EmailCampaignCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutContactInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateWithoutInquiriesInputObjectSchema = Schema;
