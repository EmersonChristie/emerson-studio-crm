import { z } from 'zod';
import { EmailCampaignUncheckedCreateNestedManyWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateNestedManyWithoutContactsInput.schema';
import { SaleUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUncheckedCreateWithoutInquiriesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
    emailCampaigns: z.lazy(() => EmailCampaignUncheckedCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional(),
  })
  .strict();

export const ContactUncheckedCreateWithoutInquiriesInputObjectSchema = Schema;
