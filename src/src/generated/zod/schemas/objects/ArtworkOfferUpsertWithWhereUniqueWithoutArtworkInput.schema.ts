import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithoutArtworkInputObjectSchema } from './ArtworkOfferUpdateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedUpdateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedUpdateWithoutArtworkInput.schema';
import { ArtworkOfferCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkOfferUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkOfferCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
