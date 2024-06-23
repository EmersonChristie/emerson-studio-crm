import { z } from 'zod';
import { ContactUpdateWithoutSalesInputObjectSchema } from './ContactUpdateWithoutSalesInput.schema';
import { ContactUncheckedUpdateWithoutSalesInputObjectSchema } from './ContactUncheckedUpdateWithoutSalesInput.schema';
import { ContactCreateWithoutSalesInputObjectSchema } from './ContactCreateWithoutSalesInput.schema';
import { ContactUncheckedCreateWithoutSalesInputObjectSchema } from './ContactUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithoutSalesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ContactUpdateWithoutSalesInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutSalesInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithoutSalesInputObjectSchema = Schema;
