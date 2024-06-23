import { z } from 'zod';
import { ArtworkCategoryCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateNestedManyWithoutArtworksInput.schema';
import { ArtworkListCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkListCreateNestedManyWithoutArtworksInput.schema';
import { ImageCreateNestedOneWithoutArtworkMainInputObjectSchema } from './ImageCreateNestedOneWithoutArtworkMainInput.schema';
import { ImageCreateNestedManyWithoutArtworkInputObjectSchema } from './ImageCreateNestedManyWithoutArtworkInput.schema';
import { InquiryCreateNestedManyWithoutArtworksInputObjectSchema } from './InquiryCreateNestedManyWithoutArtworksInput.schema';
import { SaleCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleCreateNestedManyWithoutArtworkInput.schema';
import { ArtworkPrivateViewCreateNestedManyWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateNestedManyWithoutArtworksInput.schema';
import { UserCreateNestedOneWithoutArtworksInputObjectSchema } from './UserCreateNestedOneWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateWithoutOffersInput> = z
  .object({
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string().optional().nullable(),
    status: z.string().optional(),
    categories: z.lazy(() => ArtworkCategoryCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    lists: z.lazy(() => ArtworkListCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    mainImage: z.lazy(() => ImageCreateNestedOneWithoutArtworkMainInputObjectSchema).optional(),
    images: z.lazy(() => ImageCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewCreateNestedManyWithoutArtworksInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutArtworksInputObjectSchema),
  })
  .strict();

export const ArtworkCreateWithoutOffersInputObjectSchema = Schema;