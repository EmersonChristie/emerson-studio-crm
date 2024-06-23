import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ImageUpdateOneWithoutArtworkCategoryMainNestedInputObjectSchema } from './ImageUpdateOneWithoutArtworkCategoryMainNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpdateWithoutArtworksInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    mainImage: z.lazy(() => ImageUpdateOneWithoutArtworkCategoryMainNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryUpdateWithoutArtworksInputObjectSchema = Schema;
