import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ArtworkCategoryUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema } from './ArtworkCategoryUncheckedUpdateManyWithoutArtworksNestedInput.schema';
import { ArtworkListUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema } from './ArtworkListUncheckedUpdateManyWithoutArtworksNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutArtworkNestedInput.schema';
import { InquiryUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema } from './InquiryUncheckedUpdateManyWithoutArtworksNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutArtworkNestedInput.schema';
import { ArtworkOfferUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema } from './ArtworkOfferUncheckedUpdateManyWithoutArtworkNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateWithoutPrivateViewsInput> = z
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
    artist: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    mainImageId: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdById: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    categories: z.lazy(() => ArtworkCategoryUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    lists: z.lazy(() => ArtworkListUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    images: z.lazy(() => ImageUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedUpdateWithoutPrivateViewsInputObjectSchema = Schema;
