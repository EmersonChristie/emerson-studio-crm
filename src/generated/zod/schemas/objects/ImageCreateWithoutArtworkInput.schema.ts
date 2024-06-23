import { z } from 'zod';
import { ArtworkCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkCreateNestedOneWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateWithoutArtworkInput> = z
  .object({
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isMain: z.boolean().optional(),
    artworkMain: z.lazy(() => ArtworkCreateNestedOneWithoutMainImageInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateWithoutArtworkInputObjectSchema = Schema;
