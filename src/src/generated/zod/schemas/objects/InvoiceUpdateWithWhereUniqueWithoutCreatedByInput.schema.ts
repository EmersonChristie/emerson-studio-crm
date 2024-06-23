import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutCreatedByInputObjectSchema } from './InvoiceUpdateWithoutCreatedByInput.schema';
import { InvoiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InvoiceUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
