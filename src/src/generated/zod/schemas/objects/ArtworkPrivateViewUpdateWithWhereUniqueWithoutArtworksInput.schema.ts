import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpdateWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
