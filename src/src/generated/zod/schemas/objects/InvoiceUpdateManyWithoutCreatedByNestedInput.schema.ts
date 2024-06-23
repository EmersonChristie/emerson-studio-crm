import { z } from 'zod';
import { InvoiceCreateWithoutCreatedByInputObjectSchema } from './InvoiceCreateWithoutCreatedByInput.schema';
import { InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedCreateWithoutCreatedByInput.schema';
import { InvoiceCreateOrConnectWithoutCreatedByInputObjectSchema } from './InvoiceCreateOrConnectWithoutCreatedByInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { InvoiceCreateManyCreatedByInputEnvelopeObjectSchema } from './InvoiceCreateManyCreatedByInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { InvoiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutCreatedByInput.schema';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InvoiceCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InvoiceCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InvoiceCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InvoiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => InvoiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => InvoiceScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InvoiceUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
