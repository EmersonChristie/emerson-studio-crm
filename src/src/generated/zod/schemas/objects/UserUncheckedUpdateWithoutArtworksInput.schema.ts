import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ArtworkPrivateViewUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { EmailCampaignUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EmailCampaignUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { InvoiceUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ContactUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ContactUncheckedUpdateManyWithoutCreatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutArtworksInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    organizationId: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    age: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    salt: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    token: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    tokenExpiry: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    resetToken: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    resetTokenExpiry: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailConfirmed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    emailConfirmToken: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailConfirmTokenExpiry: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailConfirmedAt: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    privateViews: z.lazy(() => ArtworkPrivateViewUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutArtworksInputObjectSchema = Schema;
