import { z } from 'zod';
import { ContactUpdateWithoutAddressInputObjectSchema } from './ContactUpdateWithoutAddressInput.schema';
import { ContactUncheckedUpdateWithoutAddressInputObjectSchema } from './ContactUncheckedUpdateWithoutAddressInput.schema';
import { ContactCreateWithoutAddressInputObjectSchema } from './ContactCreateWithoutAddressInput.schema';
import { ContactUncheckedCreateWithoutAddressInputObjectSchema } from './ContactUncheckedCreateWithoutAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithoutAddressInput> = z
  .object({
    update: z.union([
      z.lazy(() => ContactUpdateWithoutAddressInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutAddressInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutAddressInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutAddressInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithoutAddressInputObjectSchema = Schema;
