import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ArtworkUpdateOneWithoutMainImageNestedInputObjectSchema } from './ArtworkUpdateOneWithoutMainImageNestedInput.schema';
import { ArtworkCategoryUpdateOneWithoutMainImageNestedInputObjectSchema } from './ArtworkCategoryUpdateOneWithoutMainImageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateWithoutArtworkInput> = z
  .object({
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    altText: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    isMain: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    artworkMain: z.lazy(() => ArtworkUpdateOneWithoutMainImageNestedInputObjectSchema).optional(),
    artworkCategoryMain: z.lazy(() => ArtworkCategoryUpdateOneWithoutMainImageNestedInputObjectSchema).optional(),
  })
  .strict();

export const ImageUpdateWithoutArtworkInputObjectSchema = Schema;