import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutUsersInputObjectSchema } from './OrganizationCreateNestedOneWithoutUsersInput.schema';
import { ArtworkPrivateViewCreateNestedManyWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateNestedManyWithoutCreatedByInput.schema';
import { EmailCampaignCreateNestedManyWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateNestedManyWithoutCreatedByInput.schema';
import { InvoiceCreateNestedManyWithoutCreatedByInputObjectSchema } from './InvoiceCreateNestedManyWithoutCreatedByInput.schema';
import { ContactCreateNestedManyWithoutCreatedByInputObjectSchema } from './ContactCreateNestedManyWithoutCreatedByInput.schema';
import { ArtworkCreateNestedManyWithoutCreatedByInputObjectSchema } from './ArtworkCreateNestedManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    age: z.number(),
    role: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    password: z.string(),
    salt: z.string(),
    token: z.string().optional().nullable(),
    tokenExpiry: z.coerce.date().optional().nullable(),
    resetToken: z.string().optional().nullable(),
    resetTokenExpiry: z.coerce.date().optional().nullable(),
    emailConfirmed: z.boolean().optional(),
    emailConfirmToken: z.string().optional().nullable(),
    emailConfirmTokenExpiry: z.coerce.date().optional().nullable(),
    emailConfirmedAt: z.coerce.date().optional().nullable(),
    organization: z.lazy(() => OrganizationCreateNestedOneWithoutUsersInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
