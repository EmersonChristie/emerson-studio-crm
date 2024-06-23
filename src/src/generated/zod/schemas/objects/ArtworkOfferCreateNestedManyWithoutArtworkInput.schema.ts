import { z } from 'zod';
import { ArtworkOfferCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutArtworkInput.schema';
import { ArtworkOfferCreateOrConnectWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateOrConnectWithoutArtworkInput.schema';
import { ArtworkOfferCreateManyArtworkInputEnvelopeObjectSchema } from './ArtworkOfferCreateManyArtworkInputEnvelope.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferCreateNestedManyWithoutArtworkInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkOfferCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkOfferCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkOfferCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkOfferCreateNestedManyWithoutArtworkInputObjectSchema = Schema;
