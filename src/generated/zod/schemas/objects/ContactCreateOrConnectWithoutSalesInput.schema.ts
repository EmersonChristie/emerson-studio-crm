import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutSalesInputObjectSchema } from './ContactCreateWithoutSalesInput.schema';
import { ContactUncheckedCreateWithoutSalesInputObjectSchema } from './ContactUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutSalesInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutSalesInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutSalesInputObjectSchema = Schema;
