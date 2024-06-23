import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutOffersInputObjectSchema } from './ArtworkCreateWithoutOffersInput.schema';
import { ArtworkUncheckedCreateWithoutOffersInputObjectSchema } from './ArtworkUncheckedCreateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutOffersInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutOffersInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutOffersInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutOffersInputObjectSchema = Schema;
