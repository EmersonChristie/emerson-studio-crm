import { z } from 'zod';
import { ContactAddressCreateNestedOneWithoutContactInputObjectSchema } from './ContactAddressCreateNestedOneWithoutContactInput.schema';
import { UserCreateNestedOneWithoutContactsInputObjectSchema } from './UserCreateNestedOneWithoutContactsInput.schema';
import { InquiryCreateNestedManyWithoutContactInputObjectSchema } from './InquiryCreateNestedManyWithoutContactInput.schema';
import { EmailCampaignCreateNestedManyWithoutContactsInputObjectSchema } from './EmailCampaignCreateNestedManyWithoutContactsInput.schema';
import { ArtworkPrivateViewCreateNestedManyWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateNestedManyWithoutContactsInput.schema';
import { ArtworkOfferCreateNestedManyWithoutContactInputObjectSchema } from './ArtworkOfferCreateNestedManyWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateWithoutSalesInput> = z
  .object({
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
    source: z.string().optional().nullable(),
    address: z.lazy(() => ContactAddressCreateNestedOneWithoutContactInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutContactsInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryCreateNestedManyWithoutContactInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferCreateNestedManyWithoutContactInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateWithoutSalesInputObjectSchema = Schema;
