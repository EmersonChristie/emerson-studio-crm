import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArtworkUpdateManyWithoutCategoriesNestedInputObjectSchema } from './ArtworkUpdateManyWithoutCategoriesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpdateWithoutMainImageInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    artworks: z.lazy(() => ArtworkUpdateManyWithoutCategoriesNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryUpdateWithoutMainImageInputObjectSchema = Schema;
