import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArtworkUncheckedUpdateManyWithoutPrivateViewsNestedInputObjectSchema } from './ArtworkUncheckedUpdateManyWithoutPrivateViewsNestedInput.schema';
import { ContactUncheckedUpdateManyWithoutPrivateViewsNestedInputObjectSchema } from './ContactUncheckedUpdateManyWithoutPrivateViewsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedUpdateInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdById: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    artworks: z.lazy(() => ArtworkUncheckedUpdateManyWithoutPrivateViewsNestedInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUncheckedUpdateManyWithoutPrivateViewsNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedUpdateInputObjectSchema = Schema;
