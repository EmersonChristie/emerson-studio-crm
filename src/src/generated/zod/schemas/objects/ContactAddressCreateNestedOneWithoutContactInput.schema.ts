import { z } from 'zod';
import { ContactAddressCreateWithoutContactInputObjectSchema } from './ContactAddressCreateWithoutContactInput.schema';
import { ContactAddressUncheckedCreateWithoutContactInputObjectSchema } from './ContactAddressUncheckedCreateWithoutContactInput.schema';
import { ContactAddressCreateOrConnectWithoutContactInputObjectSchema } from './ContactAddressCreateOrConnectWithoutContactInput.schema';
import { ContactAddressWhereUniqueInputObjectSchema } from './ContactAddressWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCreateNestedOneWithoutContactInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactAddressCreateWithoutContactInputObjectSchema),
        z.lazy(() => ContactAddressUncheckedCreateWithoutContactInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactAddressCreateOrConnectWithoutContactInputObjectSchema).optional(),
    connect: z.lazy(() => ContactAddressWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ContactAddressCreateNestedOneWithoutContactInputObjectSchema = Schema;
