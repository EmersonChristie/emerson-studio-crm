import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferCreateWithoutContactInputObjectSchema } from './ArtworkOfferCreateWithoutContactInput.schema';
import { ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateOrConnectWithoutContactInput> = z
  .object({
    where: z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkOfferCreateWithoutContactInputObjectSchema),
      z.lazy(() => ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkOfferCreateOrConnectWithoutContactInputObjectSchema = Schema;
