import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContactUpdateOneRequiredWithoutOffersNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutOffersNestedInput.schema';
import { ArtworkUpdateOneRequiredWithoutOffersNestedInputObjectSchema } from './ArtworkUpdateOneRequiredWithoutOffersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateInput> = z
  .object({
    amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
    discount: z
      .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    message: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    contact: z.lazy(() => ContactUpdateOneRequiredWithoutOffersNestedInputObjectSchema).optional(),
    artwork: z.lazy(() => ArtworkUpdateOneRequiredWithoutOffersNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOfferUpdateInputObjectSchema = Schema;
