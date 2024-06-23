import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithoutContactInputObjectSchema } from './ArtworkOfferUpdateWithoutContactInput.schema';
import { ArtworkOfferUncheckedUpdateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedUpdateWithoutContactInput.schema';
import { ArtworkOfferCreateWithoutContactInputObjectSchema } from './ArtworkOfferCreateWithoutContactInput.schema';
import { ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpsertWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkOfferUpdateWithoutContactInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkOfferCreateWithoutContactInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferUpsertWithWhereUniqueWithoutContactInputObjectSchema = Schema;
