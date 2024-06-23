import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './ArtworkListWhereUniqueInput.schema';
import { ArtworkListCreateWithoutArtworksInputObjectSchema } from './ArtworkListCreateWithoutArtworksInput.schema';
import { ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkListCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkListCreateOrConnectWithoutArtworksInputObjectSchema = Schema;
