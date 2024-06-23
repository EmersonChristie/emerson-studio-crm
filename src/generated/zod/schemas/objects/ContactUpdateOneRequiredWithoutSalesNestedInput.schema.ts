import { z } from 'zod';
import { ContactCreateWithoutSalesInputObjectSchema } from './ContactCreateWithoutSalesInput.schema';
import { ContactUncheckedCreateWithoutSalesInputObjectSchema } from './ContactUncheckedCreateWithoutSalesInput.schema';
import { ContactCreateOrConnectWithoutSalesInputObjectSchema } from './ContactCreateOrConnectWithoutSalesInput.schema';
import { ContactUpsertWithoutSalesInputObjectSchema } from './ContactUpsertWithoutSalesInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutSalesInputObjectSchema } from './ContactUpdateWithoutSalesInput.schema';
import { ContactUncheckedUpdateWithoutSalesInputObjectSchema } from './ContactUncheckedUpdateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutSalesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutSalesInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    upsert: z.lazy(() => ContactUpsertWithoutSalesInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithoutSalesInputObjectSchema),
        z.lazy(() => ContactUncheckedUpdateWithoutSalesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateOneRequiredWithoutSalesNestedInputObjectSchema = Schema;
