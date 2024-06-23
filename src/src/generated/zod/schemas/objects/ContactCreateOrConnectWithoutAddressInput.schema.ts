import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutAddressInputObjectSchema } from './ContactCreateWithoutAddressInput.schema';
import { ContactUncheckedCreateWithoutAddressInputObjectSchema } from './ContactUncheckedCreateWithoutAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutAddressInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutAddressInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutAddressInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutAddressInputObjectSchema = Schema;
