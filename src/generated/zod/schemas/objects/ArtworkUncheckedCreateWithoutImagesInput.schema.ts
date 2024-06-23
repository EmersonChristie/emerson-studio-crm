import { z } from 'zod';
import { InquiryUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './InquiryUncheckedCreateNestedManyWithoutArtworkInput.schema';
import { SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateWithoutImagesInput> = z
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
    inquiries: z.lazy(() => InquiryUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
    sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedCreateWithoutImagesInputObjectSchema = Schema;
