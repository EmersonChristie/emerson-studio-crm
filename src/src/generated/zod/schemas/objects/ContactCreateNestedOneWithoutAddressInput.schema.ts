import { z } from 'zod';
import { ContactCreateWithoutAddressInputObjectSchema } from './ContactCreateWithoutAddressInput.schema';
import { ContactUncheckedCreateWithoutAddressInputObjectSchema } from './ContactUncheckedCreateWithoutAddressInput.schema';
import { ContactCreateOrConnectWithoutAddressInputObjectSchema } from './ContactCreateOrConnectWithoutAddressInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedOneWithoutAddressInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutAddressInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutAddressInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutAddressInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateNestedOneWithoutAddressInputObjectSchema = Schema;
