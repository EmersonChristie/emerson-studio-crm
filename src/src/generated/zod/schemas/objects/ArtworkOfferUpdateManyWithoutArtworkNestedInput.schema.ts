import { z } from 'zod';
import { ArtworkOfferCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateWithoutArtworkInput.schema';
import { ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutArtworkInput.schema';
import { ArtworkOfferCreateOrConnectWithoutArtworkInputObjectSchema } from './ArtworkOfferCreateOrConnectWithoutArtworkInput.schema';
import { ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInputObjectSchema } from './ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInput.schema';
import { ArtworkOfferCreateManyArtworkInputEnvelopeObjectSchema } from './ArtworkOfferCreateManyArtworkInputEnvelope.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInputObjectSchema } from './ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInput.schema';
import { ArtworkOfferUpdateManyWithWhereWithoutArtworkInputObjectSchema } from './ArtworkOfferUpdateManyWithWhereWithoutArtworkInput.schema';
import { ArtworkOfferScalarWhereInputObjectSchema } from './ArtworkOfferScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateManyWithoutArtworkNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferUpsertWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkOfferCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferUpdateWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkOfferUpdateManyWithWhereWithoutArtworkInputObjectSchema),
        z.lazy(() => ArtworkOfferUpdateManyWithWhereWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkOfferScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkOfferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkOfferUpdateManyWithoutArtworkNestedInputObjectSchema = Schema;
