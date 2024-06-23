import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArtworkCategoryUpdateManyWithoutArtworksNestedInputObjectSchema } from './ArtworkCategoryUpdateManyWithoutArtworksNestedInput.schema';
import { ImageUpdateOneWithoutArtworkMainNestedInputObjectSchema } from './ImageUpdateOneWithoutArtworkMainNestedInput.schema';
import { ImageUpdateManyWithoutArtworkNestedInputObjectSchema } from './ImageUpdateManyWithoutArtworkNestedInput.schema';
import { InquiryUpdateManyWithoutArtworksNestedInputObjectSchema } from './InquiryUpdateManyWithoutArtworksNestedInput.schema';
import { SaleUpdateManyWithoutArtworkNestedInputObjectSchema } from './SaleUpdateManyWithoutArtworkNestedInput.schema';
import { ArtworkPrivateViewUpdateManyWithoutArtworksNestedInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithoutArtworksNestedInput.schema';
import { UserUpdateOneRequiredWithoutArtworksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutArtworksNestedInput.schema';
import { ArtworkOfferUpdateManyWithoutArtworkNestedInputObjectSchema } from './ArtworkOfferUpdateManyWithoutArtworkNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithoutListsInput> = z
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
    artist: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    categories: z.lazy(() => ArtworkCategoryUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    mainImage: z.lazy(() => ImageUpdateOneWithoutArtworkMainNestedInputObjectSchema).optional(),
    images: z.lazy(() => ImageUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserUpdateOneRequiredWithoutArtworksNestedInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUpdateWithoutListsInputObjectSchema = Schema;
