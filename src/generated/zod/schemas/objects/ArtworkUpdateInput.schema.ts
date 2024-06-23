import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ImageUpdateOneWithoutArtworkMainNestedInputObjectSchema } from './ImageUpdateOneWithoutArtworkMainNestedInput.schema';
import { ImageUpdateManyWithoutArtworkNestedInputObjectSchema } from './ImageUpdateManyWithoutArtworkNestedInput.schema';
import { InquiryUpdateManyWithoutArtworkNestedInputObjectSchema } from './InquiryUpdateManyWithoutArtworkNestedInput.schema';
import { SaleUpdateManyWithoutArtworkNestedInputObjectSchema } from './SaleUpdateManyWithoutArtworkNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateInput> = z
  .object({
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
    mainImage: z.lazy(() => ImageUpdateOneWithoutArtworkMainNestedInputObjectSchema).optional(),
    images: z.lazy(() => ImageUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUpdateInputObjectSchema = Schema;
