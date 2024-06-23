import { z } from 'zod';
import { InvoiceUpdateWithoutSalesInputObjectSchema } from './InvoiceUpdateWithoutSalesInput.schema';
import { InvoiceUncheckedUpdateWithoutSalesInputObjectSchema } from './InvoiceUncheckedUpdateWithoutSalesInput.schema';
import { InvoiceCreateWithoutSalesInputObjectSchema } from './InvoiceCreateWithoutSalesInput.schema';
import { InvoiceUncheckedCreateWithoutSalesInputObjectSchema } from './InvoiceUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithoutSalesInput> = z
  .object({
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutSalesInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutSalesInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpsertWithoutSalesInputObjectSchema = Schema;
