import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './ArtworkListWhereUniqueInput.schema';
import { ArtworkListUpdateWithoutArtworksInputObjectSchema } from './ArtworkListUpdateWithoutArtworksInput.schema';
import { ArtworkListUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedUpdateWithoutArtworksInput.schema';
import { ArtworkListCreateWithoutArtworksInputObjectSchema } from './ArtworkListCreateWithoutArtworksInput.schema';
import { ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListUpsertWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkListUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkListUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkListCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkListUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkListUpsertWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
