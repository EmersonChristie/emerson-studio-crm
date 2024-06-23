import { z } from 'zod';
import { ArtworkOfferScalarWhereInputObjectSchema } from './ArtworkOfferScalarWhereInput.schema';
import { ArtworkOfferUpdateManyMutationInputObjectSchema } from './ArtworkOfferUpdateManyMutationInput.schema';
import { ArtworkOfferUncheckedUpdateManyWithoutOffersInputObjectSchema } from './ArtworkOfferUncheckedUpdateManyWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateManyWithWhereWithoutContactInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkOfferUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedUpdateManyWithoutOffersInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferUpdateManyWithWhereWithoutContactInputObjectSchema = Schema;
