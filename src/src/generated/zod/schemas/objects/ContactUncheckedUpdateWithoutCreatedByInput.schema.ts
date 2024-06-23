import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContactAddressUncheckedUpdateOneWithoutContactNestedInputObjectSchema } from './ContactAddressUncheckedUpdateOneWithoutContactNestedInput.schema';
import { InquiryUncheckedUpdateManyWithoutContactNestedInputObjectSchema } from './InquiryUncheckedUpdateManyWithoutContactNestedInput.schema';
import { EmailCampaignUncheckedUpdateManyWithoutContactsNestedInputObjectSchema } from './EmailCampaignUncheckedUpdateManyWithoutContactsNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutContactNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutContactNestedInput.schema';
import { ArtworkPrivateViewUncheckedUpdateManyWithoutContactsNestedInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateManyWithoutContactsNestedInput.schema';
import { ArtworkOfferUncheckedUpdateManyWithoutContactNestedInputObjectSchema } from './ArtworkOfferUncheckedUpdateManyWithoutContactNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUncheckedUpdateWithoutCreatedByInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    address: z.lazy(() => ContactAddressUncheckedUpdateOneWithoutContactNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUncheckedUpdateManyWithoutContactNestedInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUncheckedUpdateManyWithoutContactsNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedUpdateManyWithoutContactNestedInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUncheckedUpdateManyWithoutContactsNestedInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferUncheckedUpdateManyWithoutContactNestedInputObjectSchema).optional(),
  })
  .strict();

export const ContactUncheckedUpdateWithoutCreatedByInputObjectSchema = Schema;
