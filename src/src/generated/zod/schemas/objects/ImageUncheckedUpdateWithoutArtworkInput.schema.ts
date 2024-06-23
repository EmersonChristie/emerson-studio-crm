import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ArtworkUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema } from './ArtworkUncheckedUpdateOneWithoutMainImageNestedInput.schema';
import { ArtworkCategoryUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema } from './ArtworkCategoryUncheckedUpdateOneWithoutMainImageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedUpdateWithoutArtworkInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    altText: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    artworkMain: z.lazy(() => ArtworkUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema).optional(),
    artworkCategoryMain: z
      .lazy(() => ArtworkCategoryUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ImageUncheckedUpdateWithoutArtworkInputObjectSchema = Schema;