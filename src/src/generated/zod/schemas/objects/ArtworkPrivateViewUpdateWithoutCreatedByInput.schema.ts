import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArtworkUpdateManyWithoutPrivateViewsNestedInputObjectSchema } from './ArtworkUpdateManyWithoutPrivateViewsNestedInput.schema';
import { ContactUpdateManyWithoutPrivateViewsNestedInputObjectSchema } from './ContactUpdateManyWithoutPrivateViewsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateWithoutCreatedByInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    artworks: z.lazy(() => ArtworkUpdateManyWithoutPrivateViewsNestedInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUpdateManyWithoutPrivateViewsNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewUpdateWithoutCreatedByInputObjectSchema = Schema;
