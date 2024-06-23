import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutSalesInputObjectSchema } from './InvoiceCreateWithoutSalesInput.schema';
import { InvoiceUncheckedCreateWithoutSalesInputObjectSchema } from './InvoiceUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutSalesInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutSalesInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutSalesInputObjectSchema = Schema;
