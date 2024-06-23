import { z } from 'zod';
import { ArtworkUpdateWithoutOffersInputObjectSchema } from './ArtworkUpdateWithoutOffersInput.schema';
import { ArtworkUncheckedUpdateWithoutOffersInputObjectSchema } from './ArtworkUncheckedUpdateWithoutOffersInput.schema';
import { ArtworkCreateWithoutOffersInputObjectSchema } from './ArtworkCreateWithoutOffersInput.schema';
import { ArtworkUncheckedCreateWithoutOffersInputObjectSchema } from './ArtworkUncheckedCreateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithoutOffersInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutOffersInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutOffersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutOffersInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutOffersInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithoutOffersInputObjectSchema = Schema;
