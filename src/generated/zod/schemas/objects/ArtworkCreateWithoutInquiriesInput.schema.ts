import { z } from 'zod';
import { ImageCreateNestedOneWithoutArtworkMainInputObjectSchema } from './ImageCreateNestedOneWithoutArtworkMainInput.schema';
import { ImageCreateNestedManyWithoutArtworkInputObjectSchema } from './ImageCreateNestedManyWithoutArtworkInput.schema';
import { SaleCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleCreateNestedManyWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateWithoutInquiriesInput> = z
  .object({
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string(),
    category: z.string().optional().nullable(),
    status: z.string().optional(),
    mainImage: z.lazy(() => ImageCreateNestedOneWithoutArtworkMainInputObjectSchema).optional(),
    images: z.lazy(() => ImageCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateWithoutInquiriesInputObjectSchema = Schema;
