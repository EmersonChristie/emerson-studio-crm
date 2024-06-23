import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutCreatedByInputObjectSchema } from './InvoiceCreateWithoutCreatedByInput.schema';
import { InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './InvoiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
