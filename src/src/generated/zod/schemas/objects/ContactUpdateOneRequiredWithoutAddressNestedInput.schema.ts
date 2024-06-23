import { z } from 'zod';
import { ContactCreateWithoutAddressInputObjectSchema } from './ContactCreateWithoutAddressInput.schema';
import { ContactUncheckedCreateWithoutAddressInputObjectSchema } from './ContactUncheckedCreateWithoutAddressInput.schema';
import { ContactCreateOrConnectWithoutAddressInputObjectSchema } from './ContactCreateOrConnectWithoutAddressInput.schema';
import { ContactUpsertWithoutAddressInputObjectSchema } from './ContactUpsertWithoutAddressInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutAddressInputObjectSchema } from './ContactUpdateWithoutAddressInput.schema';
import { ContactUncheckedUpdateWithoutAddressInputObjectSchema } from './ContactUncheckedUpdateWithoutAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutAddressNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutAddressInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutAddressInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutAddressInputObjectSchema).optional(),
    upsert: z.lazy(() => ContactUpsertWithoutAddressInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithoutAddressInputObjectSchema),
        z.lazy(() => ContactUncheckedUpdateWithoutAddressInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateOneRequiredWithoutAddressNestedInputObjectSchema = Schema;
