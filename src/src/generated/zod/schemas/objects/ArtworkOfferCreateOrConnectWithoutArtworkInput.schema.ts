import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateOrConnectWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkOfferCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferCreateOrConnectWithoutArtworkInputObjectSchema = Schema;
