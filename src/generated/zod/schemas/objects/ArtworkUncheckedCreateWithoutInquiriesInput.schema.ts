import { z } from 'zod';
import { ImageUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutArtworkInput.schema';
import { SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateWithoutInquiriesInput> = z
  .object({
    id: z.number().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string(),
    category: z.string().optional().nullable(),
    status: z.string().optional(),
    mainImageId: z.number().optional().nullable(),
    images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema = Schema;
