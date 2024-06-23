import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateNestedManyWithoutArtworksInput> = z
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
    connect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateNestedManyWithoutArtworksInputObjectSchema = Schema;
