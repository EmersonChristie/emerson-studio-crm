import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutInvoiceInputObjectSchema } from './SaleUpdateWithoutInvoiceInput.schema';
import { SaleUncheckedUpdateWithoutInvoiceInputObjectSchema } from './SaleUncheckedUpdateWithoutInvoiceInput.schema';
import { SaleCreateWithoutInvoiceInputObjectSchema } from './SaleCreateWithoutInvoiceInput.schema';
import { SaleUncheckedCreateWithoutInvoiceInputObjectSchema } from './SaleUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutInvoiceInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SaleUpdateWithoutInvoiceInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutInvoiceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutInvoiceInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutInvoiceInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema = Schema;
