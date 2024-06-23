import { z } from 'zod';
import { SaleCreateWithoutInvoiceInputObjectSchema } from './SaleCreateWithoutInvoiceInput.schema';
import { SaleUncheckedCreateWithoutInvoiceInputObjectSchema } from './SaleUncheckedCreateWithoutInvoiceInput.schema';
import { SaleCreateOrConnectWithoutInvoiceInputObjectSchema } from './SaleCreateOrConnectWithoutInvoiceInput.schema';
import { SaleUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { SaleCreateManyInvoiceInputEnvelopeObjectSchema } from './SaleCreateManyInvoiceInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { SaleUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './SaleUpdateManyWithWhereWithoutInvoiceInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutInvoiceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleCreateWithoutInvoiceInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutInvoiceInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutInvoiceInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SaleCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SaleUpdateManyWithWhereWithoutInvoiceInputObjectSchema),
        z.lazy(() => SaleUpdateManyWithWhereWithoutInvoiceInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => SaleScalarWhereInputObjectSchema), z.lazy(() => SaleScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleUncheckedUpdateManyWithoutInvoiceNestedInputObjectSchema = Schema;
