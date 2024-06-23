import { z } from 'zod';
import { ArtworkCategoryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedCreateNestedManyWithoutArtworksInput.schema';
import { ArtworkListUncheckedCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedCreateNestedManyWithoutArtworksInput.schema';
import { ImageUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutArtworkInput.schema';
import { InquiryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema } from './InquiryUncheckedCreateNestedManyWithoutArtworksInput.schema';
import { SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutArtworkInput.schema';
import { ArtworkPrivateViewUncheckedCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateNestedManyWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateWithoutOffersInput> = z
  .object({
    id: z.number().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string().optional().nullable(),
    status: z.string().optional(),
    mainImageId: z.number().optional().nullable(),
    createdById: z.number(),
    categories: z.lazy(() => ArtworkCategoryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    lists: z.lazy(() => ArtworkListUncheckedCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewUncheckedCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedCreateWithoutOffersInputObjectSchema = Schema;
