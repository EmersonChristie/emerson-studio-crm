import { z } from 'zod';
import { InquiryCreateNestedManyWithoutContactInputObjectSchema } from './InquiryCreateNestedManyWithoutContactInput.schema';
import { SaleCreateNestedManyWithoutContactInputObjectSchema } from './SaleCreateNestedManyWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateWithoutEmailCampaignsInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
    inquiries: z.lazy(() => InquiryCreateNestedManyWithoutContactInputObjectSchema).optional(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutContactInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateWithoutEmailCampaignsInputObjectSchema = Schema;
