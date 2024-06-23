import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutInvoiceInputObjectSchema } from './SaleUpdateWithoutInvoiceInput.schema';
import { SaleUncheckedUpdateWithoutInvoiceInputObjectSchema } from './SaleUncheckedUpdateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutInvoiceInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateWithoutInvoiceInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutInvoiceInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema = Schema;
