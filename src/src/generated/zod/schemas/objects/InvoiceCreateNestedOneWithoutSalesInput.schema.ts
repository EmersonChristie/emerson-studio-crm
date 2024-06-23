import { z } from 'zod';
import { InvoiceCreateWithoutSalesInputObjectSchema } from './InvoiceCreateWithoutSalesInput.schema';
import { InvoiceUncheckedCreateWithoutSalesInputObjectSchema } from './InvoiceUncheckedCreateWithoutSalesInput.schema';
import { InvoiceCreateOrConnectWithoutSalesInputObjectSchema } from './InvoiceCreateOrConnectWithoutSalesInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutSalesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InvoiceCreateWithoutSalesInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateNestedOneWithoutSalesInputObjectSchema = Schema;
