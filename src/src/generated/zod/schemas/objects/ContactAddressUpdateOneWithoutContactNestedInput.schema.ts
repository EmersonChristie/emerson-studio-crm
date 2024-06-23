import { z } from 'zod';
import { ContactAddressCreateWithoutContactInputObjectSchema } from './ContactAddressCreateWithoutContactInput.schema';
import { ContactAddressUncheckedCreateWithoutContactInputObjectSchema } from './ContactAddressUncheckedCreateWithoutContactInput.schema';
import { ContactAddressCreateOrConnectWithoutContactInputObjectSchema } from './ContactAddressCreateOrConnectWithoutContactInput.schema';
import { ContactAddressUpsertWithoutContactInputObjectSchema } from './ContactAddressUpsertWithoutContactInput.schema';
import { ContactAddressWhereUniqueInputObjectSchema } from './ContactAddressWhereUniqueInput.schema';
import { ContactAddressUpdateWithoutContactInputObjectSchema } from './ContactAddressUpdateWithoutContactInput.schema';
import { ContactAddressUncheckedUpdateWithoutContactInputObjectSchema } from './ContactAddressUncheckedUpdateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressUpdateOneWithoutContactNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactAddressCreateWithoutContactInputObjectSchema),
        z.lazy(() => ContactAddressUncheckedCreateWithoutContactInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactAddressCreateOrConnectWithoutContactInputObjectSchema).optional(),
    upsert: z.lazy(() => ContactAddressUpsertWithoutContactInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ContactAddressWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ContactAddressUpdateWithoutContactInputObjectSchema),
        z.lazy(() => ContactAddressUncheckedUpdateWithoutContactInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContactAddressUpdateOneWithoutContactNestedInputObjectSchema = Schema;
