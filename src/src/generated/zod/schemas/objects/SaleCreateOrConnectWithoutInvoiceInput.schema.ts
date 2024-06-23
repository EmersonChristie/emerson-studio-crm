import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutInvoiceInputObjectSchema } from './SaleCreateWithoutInvoiceInput.schema';
import { SaleUncheckedCreateWithoutInvoiceInputObjectSchema } from './SaleUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutInvoiceInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutInvoiceInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutInvoiceInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutInvoiceInputObjectSchema = Schema;
