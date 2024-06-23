import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './ArtworkListWhereUniqueInput.schema';
import { ArtworkListUpdateWithoutArtworksInputObjectSchema } from './ArtworkListUpdateWithoutArtworksInput.schema';
import { ArtworkListUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkListUncheckedUpdateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListUpdateWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkListWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkListUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkListUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkListUpdateWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
