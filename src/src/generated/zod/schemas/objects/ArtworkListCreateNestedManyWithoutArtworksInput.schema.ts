import { z } from 'zod';
import { ArtworkListCreateWithoutArtworksInputObjectSchema } from './ArtworkListCreateWithoutArtworksInput.schema';
import { ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedCreateWithoutArtworksInput.schema';
import { ArtworkListCreateOrConnectWithoutArtworksInputObjectSchema } from './ArtworkListCreateOrConnectWithoutArtworksInput.schema';
import { ArtworkListWhereUniqueInputObjectSchema } from './ArtworkListWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListCreateNestedManyWithoutArtworksInput> = z
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
    connect: z
      .union([
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkListWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkListCreateNestedManyWithoutArtworksInputObjectSchema = Schema;
