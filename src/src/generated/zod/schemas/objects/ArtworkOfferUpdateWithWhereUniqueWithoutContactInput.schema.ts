import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithoutContactInputObjectSchema } from './ArtworkOfferUpdateWithoutContactInput.schema';
import { ArtworkOfferUncheckedUpdateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedUpdateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkOfferUpdateWithoutContactInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferUpdateWithWhereUniqueWithoutContactInputObjectSchema = Schema;
