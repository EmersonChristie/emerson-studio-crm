import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryUpdateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUpdateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedUpdateWithoutArtworksInput.schema';
import { ArtworkCategoryCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkCategoryUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCategoryCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
