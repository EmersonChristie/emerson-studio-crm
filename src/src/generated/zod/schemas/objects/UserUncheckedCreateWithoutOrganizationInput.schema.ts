import { z } from 'zod';
import { ArtworkPrivateViewUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ContactUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ArtworkUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganizationInput> = z
  .object({
    id: z.number().optional(),
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
    privateViews: z.lazy(() => ArtworkPrivateViewUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutOrganizationInputObjectSchema = Schema;
