import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ImageUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutArtworkNestedInput.schema';
import { InquiryUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './InquiryUncheckedUpdateManyWithoutArtworkNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutArtworkNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateWithoutMainImageInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    price: z
      .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    artist: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    category: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    images: z.lazy(() => ImageUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedUpdateWithoutMainImageInputObjectSchema = Schema;
