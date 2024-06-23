import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewCreateWithoutArtworksInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewCreateOrConnectWithoutArtworksInputObjectSchema = Schema;
