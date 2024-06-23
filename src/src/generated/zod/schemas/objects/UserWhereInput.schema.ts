import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { OrganizationRelationFilterObjectSchema } from './OrganizationRelationFilter.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { ArtworkPrivateViewListRelationFilterObjectSchema } from './ArtworkPrivateViewListRelationFilter.schema';
import { EmailCampaignListRelationFilterObjectSchema } from './EmailCampaignListRelationFilter.schema';
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { ContactListRelationFilterObjectSchema } from './ContactListRelationFilter.schema';
import { ArtworkListRelationFilterObjectSchema } from './ArtworkListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    organizationId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    age: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    role: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    salt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tokenExpiry: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    resetToken: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    resetTokenExpiry: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    emailConfirmed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    emailConfirmToken: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailConfirmTokenExpiry: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    emailConfirmedAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    organization: z
      .union([z.lazy(() => OrganizationRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)])
      .optional()
      .nullable(),
    privateViews: z.lazy(() => ArtworkPrivateViewListRelationFilterObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignListRelationFilterObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    contacts: z.lazy(() => ContactListRelationFilterObjectSchema).optional(),
    artworks: z.lazy(() => ArtworkListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
