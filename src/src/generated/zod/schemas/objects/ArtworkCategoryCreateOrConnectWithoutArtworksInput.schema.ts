import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCategoryCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryCreateOrConnectWithoutArtworksInputObjectSchema = Schema;
