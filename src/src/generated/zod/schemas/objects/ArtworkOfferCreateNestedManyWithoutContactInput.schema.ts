import { z } from 'zod';
import { ArtworkOfferCreateWithoutContactInputObjectSchema } from './ArtworkOfferCreateWithoutContactInput.schema';
import { ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutContactInput.schema';
import { ArtworkOfferCreateOrConnectWithoutContactInputObjectSchema } from './ArtworkOfferCreateOrConnectWithoutContactInput.schema';
import { ArtworkOfferCreateManyContactInputEnvelopeObjectSchema } from './ArtworkOfferCreateManyContactInputEnvelope.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateNestedManyWithoutContactInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkOfferCreateWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferCreateWithoutContactInputObjectSchema).array(),
        z.lazy(() => ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkOfferCreateOrConnectWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferCreateOrConnectWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkOfferCreateManyContactInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkOfferCreateNestedManyWithoutContactInputObjectSchema = Schema;
