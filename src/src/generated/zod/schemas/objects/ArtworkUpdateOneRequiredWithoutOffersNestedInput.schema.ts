import { z } from 'zod';
import { ArtworkCreateWithoutOffersInputObjectSchema } from './ArtworkCreateWithoutOffersInput.schema';
import { ArtworkUncheckedCreateWithoutOffersInputObjectSchema } from './ArtworkUncheckedCreateWithoutOffersInput.schema';
import { ArtworkCreateOrConnectWithoutOffersInputObjectSchema } from './ArtworkCreateOrConnectWithoutOffersInput.schema';
import { ArtworkUpsertWithoutOffersInputObjectSchema } from './ArtworkUpsertWithoutOffersInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutOffersInputObjectSchema } from './ArtworkUpdateWithoutOffersInput.schema';
import { ArtworkUncheckedUpdateWithoutOffersInputObjectSchema } from './ArtworkUncheckedUpdateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateOneRequiredWithoutOffersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutOffersInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutOffersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutOffersInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkUpsertWithoutOffersInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithoutOffersInputObjectSchema),
        z.lazy(() => ArtworkUncheckedUpdateWithoutOffersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUpdateOneRequiredWithoutOffersNestedInputObjectSchema = Schema;
