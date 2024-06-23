import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutArtworksInput.schema';
import { ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpsertWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
