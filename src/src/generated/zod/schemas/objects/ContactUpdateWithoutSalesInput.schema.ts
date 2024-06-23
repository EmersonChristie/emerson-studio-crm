import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContactAddressUpdateOneWithoutContactNestedInputObjectSchema } from './ContactAddressUpdateOneWithoutContactNestedInput.schema';
import { UserUpdateOneWithoutContactsNestedInputObjectSchema } from './UserUpdateOneWithoutContactsNestedInput.schema';
import { InquiryUpdateManyWithoutContactNestedInputObjectSchema } from './InquiryUpdateManyWithoutContactNestedInput.schema';
import { EmailCampaignUpdateManyWithoutContactsNestedInputObjectSchema } from './EmailCampaignUpdateManyWithoutContactsNestedInput.schema';
import { ArtworkPrivateViewUpdateManyWithoutContactsNestedInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithoutContactsNestedInput.schema';
import { ArtworkOfferUpdateManyWithoutContactNestedInputObjectSchema } from './ArtworkOfferUpdateManyWithoutContactNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateWithoutSalesInput> = z
  .object({
    firstName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    lastName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    phone: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    notes: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    source: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    address: z.lazy(() => ContactAddressUpdateOneWithoutContactNestedInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserUpdateOneWithoutContactsNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUpdateManyWithoutContactNestedInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUpdateManyWithoutContactsNestedInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUpdateManyWithoutContactsNestedInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferUpdateManyWithoutContactNestedInputObjectSchema).optional(),
  })
  .strict();

export const ContactUpdateWithoutSalesInputObjectSchema = Schema;
