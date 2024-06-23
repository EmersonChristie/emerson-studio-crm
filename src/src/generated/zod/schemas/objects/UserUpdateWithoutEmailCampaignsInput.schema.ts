import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneWithoutUsersNestedInputObjectSchema } from './OrganizationUpdateOneWithoutUsersNestedInput.schema';
import { ArtworkPrivateViewUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithoutCreatedByNestedInput.schema';
import { InvoiceUpdateManyWithoutCreatedByNestedInputObjectSchema } from './InvoiceUpdateManyWithoutCreatedByNestedInput.schema';
import { ContactUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ContactUpdateManyWithoutCreatedByNestedInput.schema';
import { ArtworkUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ArtworkUpdateManyWithoutCreatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutEmailCampaignsInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    organization: z.lazy(() => OrganizationUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    artworks: z.lazy(() => ArtworkUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  })
  .strict();

export const UserUpdateWithoutEmailCampaignsInputObjectSchema = Schema;
