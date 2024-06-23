import { z } from 'zod';
import { ContactAddressUpdateWithoutContactInputObjectSchema } from './ContactAddressUpdateWithoutContactInput.schema';
import { ContactAddressUncheckedUpdateWithoutContactInputObjectSchema } from './ContactAddressUncheckedUpdateWithoutContactInput.schema';
import { ContactAddressCreateWithoutContactInputObjectSchema } from './ContactAddressCreateWithoutContactInput.schema';
import { ContactAddressUncheckedCreateWithoutContactInputObjectSchema } from './ContactAddressUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressUpsertWithoutContactInput> = z
  .object({
    update: z.union([
      z.lazy(() => ContactAddressUpdateWithoutContactInputObjectSchema),
      z.lazy(() => ContactAddressUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactAddressCreateWithoutContactInputObjectSchema),
      z.lazy(() => ContactAddressUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const ContactAddressUpsertWithoutContactInputObjectSchema = Schema;
