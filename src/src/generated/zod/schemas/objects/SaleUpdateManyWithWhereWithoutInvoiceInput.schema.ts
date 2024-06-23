import { z } from 'zod';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';
import { SaleUpdateManyMutationInputObjectSchema } from './SaleUpdateManyMutationInput.schema';
import { SaleUncheckedUpdateManyWithoutSalesInputObjectSchema } from './SaleUncheckedUpdateManyWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutInvoiceInput> = z
  .object({
    where: z.lazy(() => SaleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateManyMutationInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateManyWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateManyWithWhereWithoutInvoiceInputObjectSchema = Schema;
