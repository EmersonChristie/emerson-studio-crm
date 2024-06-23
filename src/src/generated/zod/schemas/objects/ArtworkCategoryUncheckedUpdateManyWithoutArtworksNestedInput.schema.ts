import { z } from 'zod';
import { ArtworkCategoryCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateWithoutArtworksInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkCategoryCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkCategoryCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkCategoryUpdateManyWithWhereWithoutArtworksInputObjectSchema } from './ArtworkCategoryUpdateManyWithWhereWithoutArtworksInput.schema';
import { ArtworkCategoryScalarWhereInputObjectSchema } from './ArtworkCategoryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedUpdateManyWithoutArtworksNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkCategoryUpdateManyWithWhereWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkCategoryUpdateManyWithWhereWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkCategoryScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkCategoryScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedUpdateManyWithoutArtworksNestedInputObjectSchema = Schema;
