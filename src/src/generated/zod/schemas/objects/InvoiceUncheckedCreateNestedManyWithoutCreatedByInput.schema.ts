import { z } from 'zod';
import { InvoiceCreateWithoutCreatedByInputObjectSchema } from './InvoiceCreateWithoutCreatedByInput.schema';
import { InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedCreateWithoutCreatedByInput.schema';
import { InvoiceCreateOrConnectWithoutCreatedByInputObjectSchema } from './InvoiceCreateOrConnectWithoutCreatedByInput.schema';
import { InvoiceCreateManyCreatedByInputEnvelopeObjectSchema } from './InvoiceCreateManyCreatedByInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutCreatedByInput> = z
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
    createMany: z.lazy(() => InvoiceCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InvoiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
