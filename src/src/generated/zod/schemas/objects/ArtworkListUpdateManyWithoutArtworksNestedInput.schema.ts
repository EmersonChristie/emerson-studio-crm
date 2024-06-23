import { z } from 'zod';
import { ArtworkListCreateWithoutArtworksInputObjectSchema } from './ArtworkListCreateWithoutArtworksInput.schema';
import { ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkListCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkListCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkListUpsertWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkListUpsertWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkListWhereUniqueInputObjectSchema } from './ArtworkListWhereUniqueInput.schema';
import { ArtworkListUpdateWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkListUpdateWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkListUpdateManyWithWhereWithoutArtworksInputObjectSchema } from './ArtworkListUpdateManyWithWhereWithoutArtworksInput.schema';
import { ArtworkListScalarWhereInputObjectSchema } from './ArtworkListScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListUpdateManyWithoutArtworksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkListCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListCreateWithoutArtworksInputObjectSchema).array(),
        z.lazy(() => ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkListCreateOrConnectWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListCreateOrConnectWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkListUpsertWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListUpsertWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkListUpdateWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListUpdateWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkListUpdateManyWithWhereWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkListUpdateManyWithWhereWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkListScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkListScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkListUpdateManyWithoutArtworksNestedInputObjectSchema = Schema;
