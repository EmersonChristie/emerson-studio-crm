import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { InquiryListRelationFilterObjectSchema } from './InquiryListRelationFilter.schema';
import { EmailCampaignListRelationFilterObjectSchema } from './EmailCampaignListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => ContactWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    notes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    inquiries: z.lazy(() => InquiryListRelationFilterObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignListRelationFilterObjectSchema).optional(),
    sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ContactWhereInputObjectSchema = Schema;
