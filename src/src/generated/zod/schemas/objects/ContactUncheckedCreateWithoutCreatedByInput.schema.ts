import { z } from 'zod';
import { ContactAddressUncheckedCreateNestedOneWithoutContactInputObjectSchema } from './ContactAddressUncheckedCreateNestedOneWithoutContactInput.schema';
import { InquiryUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './InquiryUncheckedCreateNestedManyWithoutContactInput.schema';
import { EmailCampaignUncheckedCreateNestedManyWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateNestedManyWithoutContactsInput.schema';
import { SaleUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutContactInput.schema';
import { ArtworkPrivateViewUncheckedCreateNestedManyWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateNestedManyWithoutContactsInput.schema';
import { ArtworkOfferUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedCreateNestedManyWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUncheckedCreateWithoutCreatedByInput> = z
  .object({
    id: z.number().optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
    source: z.string().optional().nullable(),
    address: z.lazy(() => ContactAddressUncheckedCreateNestedOneWithoutContactInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUncheckedCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUncheckedCreateNestedManyWithoutContactsInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional(),
  })
  .strict();

export const ContactUncheckedCreateWithoutCreatedByInputObjectSchema = Schema;
