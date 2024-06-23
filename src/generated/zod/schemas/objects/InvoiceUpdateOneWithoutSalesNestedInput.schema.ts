import { z } from 'zod';
import { InvoiceCreateWithoutSalesInputObjectSchema } from './InvoiceCreateWithoutSalesInput.schema';
import { InvoiceUncheckedCreateWithoutSalesInputObjectSchema } from './InvoiceUncheckedCreateWithoutSalesInput.schema';
import { InvoiceCreateOrConnectWithoutSalesInputObjectSchema } from './InvoiceCreateOrConnectWithoutSalesInput.schema';
import { InvoiceUpsertWithoutSalesInputObjectSchema } from './InvoiceUpsertWithoutSalesInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutSalesInputObjectSchema } from './InvoiceUpdateWithoutSalesInput.schema';
import { InvoiceUncheckedUpdateWithoutSalesInputObjectSchema } from './InvoiceUncheckedUpdateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateOneWithoutSalesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InvoiceCreateWithoutSalesInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    upsert: z.lazy(() => InvoiceUpsertWithoutSalesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => InvoiceUpdateWithoutSalesInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutSalesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceUpdateOneWithoutSalesNestedInputObjectSchema = Schema;
