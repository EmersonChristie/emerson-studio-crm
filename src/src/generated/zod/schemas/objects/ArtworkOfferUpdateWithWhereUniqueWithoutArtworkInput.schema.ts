import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithoutArtworkInputObjectSchema } from './ArtworkOfferUpdateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedUpdateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedUpdateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkOfferUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
