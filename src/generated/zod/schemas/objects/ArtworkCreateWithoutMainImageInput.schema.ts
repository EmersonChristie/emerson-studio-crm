import { z } from 'zod';
import { ImageCreateNestedManyWithoutArtworkInputObjectSchema } from './ImageCreateNestedManyWithoutArtworkInput.schema';
import { InquiryCreateNestedManyWithoutArtworkInputObjectSchema } from './InquiryCreateNestedManyWithoutArtworkInput.schema';
import { SaleCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleCreateNestedManyWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateWithoutMainImageInput> = z
  .object({
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string(),
    category: z.string().optional().nullable(),
    status: z.string().optional(),
    images: z.lazy(() => ImageCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    sales: z.lazy(() => SaleCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateWithoutMainImageInputObjectSchema = Schema;
