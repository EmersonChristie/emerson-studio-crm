import { z } from 'zod';
import { ArtworkCategoryCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkCategoryCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedCreateNestedManyWithoutArtworksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCategoryCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryCreateWithoutArtworksInputObjectSchema).array(),
        z.lazy(() => ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCategoryCreateOrConnectWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryCreateOrConnectWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema = Schema;
