import { z } from 'zod';
import { SaleCreateWithoutArtworkInputObjectSchema } from './SaleCreateWithoutArtworkInput.schema';
import { SaleUncheckedCreateWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateWithoutArtworkInput.schema';
import { SaleCreateOrConnectWithoutArtworkInputObjectSchema } from './SaleCreateOrConnectWithoutArtworkInput.schema';
import { SaleUpsertWithWhereUniqueWithoutArtworkInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutArtworkInput.schema';
import { SaleCreateManyArtworkInputEnvelopeObjectSchema } from './SaleCreateManyArtworkInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutArtworkInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutArtworkInput.schema';
import { SaleUpdateManyWithWhereWithoutArtworkInputObjectSchema } from './SaleUpdateManyWithWhereWithoutArtworkInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateManyWithoutArtworkNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SaleCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SaleUpdateManyWithWhereWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleUpdateManyWithWhereWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleUpdateManyWithoutArtworkNestedInputObjectSchema = Schema;
