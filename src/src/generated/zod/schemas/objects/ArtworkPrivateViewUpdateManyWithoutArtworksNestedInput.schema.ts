import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInput.schema';
import { ArtworkPrivateViewUpdateManyWithWhereWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithWhereWithoutArtworksInput.schema';
import { ArtworkPrivateViewScalarWhereInputObjectSchema } from './ArtworkPrivateViewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateManyWithoutArtworksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema).array(),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutArtworksInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkPrivateViewScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewUpdateManyWithoutArtworksNestedInputObjectSchema = Schema;
