import { z } from 'zod';
import { ContactAddressWhereUniqueInputObjectSchema } from './ContactAddressWhereUniqueInput.schema';
import { ContactAddressCreateWithoutContactInputObjectSchema } from './ContactAddressCreateWithoutContactInput.schema';
import { ContactAddressUncheckedCreateWithoutContactInputObjectSchema } from './ContactAddressUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCreateOrConnectWithoutContactInput> = z
  .object({
    where: z.lazy(() => ContactAddressWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactAddressCreateWithoutContactInputObjectSchema),
      z.lazy(() => ContactAddressUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const ContactAddressCreateOrConnectWithoutContactInputObjectSchema = Schema;
