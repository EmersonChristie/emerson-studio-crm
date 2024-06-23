import { z } from 'zod';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';
import { InvoiceUpdateManyMutationInputObjectSchema } from './InvoiceUpdateManyMutationInput.schema';
import { InvoiceUncheckedUpdateManyWithoutInvoicesInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => InvoiceScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => InvoiceUpdateManyMutationInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateManyWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema = Schema;
