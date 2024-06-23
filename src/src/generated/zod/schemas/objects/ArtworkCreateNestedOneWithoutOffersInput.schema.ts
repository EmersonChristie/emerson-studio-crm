import { z } from 'zod';
import { ArtworkCreateWithoutOffersInputObjectSchema } from './ArtworkCreateWithoutOffersInput.schema';
import { ArtworkUncheckedCreateWithoutOffersInputObjectSchema } from './ArtworkUncheckedCreateWithoutOffersInput.schema';
import { ArtworkCreateOrConnectWithoutOffersInputObjectSchema } from './ArtworkCreateOrConnectWithoutOffersInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedOneWithoutOffersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutOffersInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutOffersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutOffersInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateNestedOneWithoutOffersInputObjectSchema = Schema;
