import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutCreatedByInputObjectSchema } from './InvoiceUpdateWithoutCreatedByInput.schema';
import { InvoiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCreatedByInput.schema';
import { InvoiceCreateWithoutCreatedByInputObjectSchema } from './InvoiceCreateWithoutCreatedByInput.schema';
import { InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
