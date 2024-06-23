import { z } from 'zod';
import { SaleCreateWithoutInvoiceInputObjectSchema } from './SaleCreateWithoutInvoiceInput.schema';
import { SaleUncheckedCreateWithoutInvoiceInputObjectSchema } from './SaleUncheckedCreateWithoutInvoiceInput.schema';
import { SaleCreateOrConnectWithoutInvoiceInputObjectSchema } from './SaleCreateOrConnectWithoutInvoiceInput.schema';
import { SaleCreateManyInvoiceInputEnvelopeObjectSchema } from './SaleCreateManyInvoiceInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutInvoiceInput> = z
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
    createMany: z.lazy(() => SaleCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema = Schema;
