import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { InquiryUpdateManyWithoutContactNestedInputObjectSchema } from './InquiryUpdateManyWithoutContactNestedInput.schema';
import { EmailCampaignUpdateManyWithoutContactsNestedInputObjectSchema } from './EmailCampaignUpdateManyWithoutContactsNestedInput.schema';
import { SaleUpdateManyWithoutContactNestedInputObjectSchema } from './SaleUpdateManyWithoutContactNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    phone: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    address: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    notes: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    inquiries: z.lazy(() => InquiryUpdateManyWithoutContactNestedInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUpdateManyWithoutContactsNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUpdateManyWithoutContactNestedInputObjectSchema).optional(),
  })
  .strict();

export const ContactUpdateInputObjectSchema = Schema;
