import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryUpdateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUpdateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedUpdateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkCategoryUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
