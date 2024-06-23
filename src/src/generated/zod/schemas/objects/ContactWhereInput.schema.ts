import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ContactAddressRelationFilterObjectSchema } from './ContactAddressRelationFilter.schema';
import { ContactAddressWhereInputObjectSchema } from './ContactAddressWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { InquiryListRelationFilterObjectSchema } from './InquiryListRelationFilter.schema';
import { EmailCampaignListRelationFilterObjectSchema } from './EmailCampaignListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';
import { ArtworkPrivateViewListRelationFilterObjectSchema } from './ArtworkPrivateViewListRelationFilter.schema';
import { ArtworkOfferListRelationFilterObjectSchema } from './ArtworkOfferListRelationFilter.schema';

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
    firstName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    notes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    source: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([
        z.lazy(() => ContactAddressRelationFilterObjectSchema),
        z.lazy(() => ContactAddressWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdBy: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    inquiries: z.lazy(() => InquiryListRelationFilterObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignListRelationFilterObjectSchema).optional(),
    sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewListRelationFilterObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ContactWhereInputObjectSchema = Schema;
