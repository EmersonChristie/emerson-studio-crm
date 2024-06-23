import { z } from 'zod';
import { ArtworkOfferCreateWithoutContactInputObjectSchema } from './ArtworkOfferCreateWithoutContactInput.schema';
import { ArtworkOfferUncheckedCreateWithoutContactInputObjectSchema } from './ArtworkOfferUncheckedCreateWithoutContactInput.schema';
import { ArtworkOfferCreateOrConnectWithoutContactInputObjectSchema } from './ArtworkOfferCreateOrConnectWithoutContactInput.schema';
import { ArtworkOfferUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './ArtworkOfferUpsertWithWhereUniqueWithoutContactInput.schema';
import { ArtworkOfferCreateManyContactInputEnvelopeObjectSchema } from './ArtworkOfferCreateManyContactInputEnvelope.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './ArtworkOfferUpdateWithWhereUniqueWithoutContactInput.schema';
import { ArtworkOfferUpdateManyWithWhereWithoutContactInputObjectSchema } from './ArtworkOfferUpdateManyWithWhereWithoutContactInput.schema';
import { ArtworkOfferScalarWhereInputObjectSchema } from './ArtworkOfferScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUpdateManyWithoutContactNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ArtworkOfferUpsertWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferUpsertWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkOfferCreateManyContactInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => ArtworkOfferUpdateWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferUpdateWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkOfferUpdateManyWithWhereWithoutContactInputObjectSchema),
        z.lazy(() => ArtworkOfferUpdateManyWithWhereWithoutContactInputObjectSchema).array(),
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

export const ArtworkOfferUpdateManyWithoutContactNestedInputObjectSchema = Schema;
