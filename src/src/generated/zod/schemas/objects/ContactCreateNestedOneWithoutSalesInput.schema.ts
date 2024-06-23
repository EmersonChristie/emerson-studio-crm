import { z } from 'zod';
import { ContactCreateWithoutSalesInputObjectSchema } from './ContactCreateWithoutSalesInput.schema';
import { ContactUncheckedCreateWithoutSalesInputObjectSchema } from './ContactUncheckedCreateWithoutSalesInput.schema';
import { ContactCreateOrConnectWithoutSalesInputObjectSchema } from './ContactCreateOrConnectWithoutSalesInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedOneWithoutSalesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutSalesInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateNestedOneWithoutSalesInputObjectSchema = Schema;
