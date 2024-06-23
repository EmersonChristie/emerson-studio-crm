import { z } from 'zod';
import { SaleCreateWithoutContactInputObjectSchema } from './SaleCreateWithoutContactInput.schema';
import { SaleUncheckedCreateWithoutContactInputObjectSchema } from './SaleUncheckedCreateWithoutContactInput.schema';
import { SaleCreateOrConnectWithoutContactInputObjectSchema } from './SaleCreateOrConnectWithoutContactInput.schema';
import { SaleUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutContactInput.schema';
import { SaleCreateManyContactInputEnvelopeObjectSchema } from './SaleCreateManyContactInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutContactInput.schema';
import { SaleUpdateManyWithWhereWithoutContactInputObjectSchema } from './SaleUpdateManyWithWhereWithoutContactInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutContactNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutContactInputObjectSchema),
        z.lazy(() => SaleCreateWithoutContactInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutContactInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SaleCreateManyContactInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SaleUpdateManyWithWhereWithoutContactInputObjectSchema),
        z.lazy(() => SaleUpdateManyWithWhereWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleUncheckedUpdateManyWithoutContactNestedInputObjectSchema = Schema;
