import { z } from 'zod';
import { ContactCreateWithoutOffersInputObjectSchema } from './ContactCreateWithoutOffersInput.schema';
import { ContactUncheckedCreateWithoutOffersInputObjectSchema } from './ContactUncheckedCreateWithoutOffersInput.schema';
import { ContactCreateOrConnectWithoutOffersInputObjectSchema } from './ContactCreateOrConnectWithoutOffersInput.schema';
import { ContactUpsertWithoutOffersInputObjectSchema } from './ContactUpsertWithoutOffersInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutOffersInputObjectSchema } from './ContactUpdateWithoutOffersInput.schema';
import { ContactUncheckedUpdateWithoutOffersInputObjectSchema } from './ContactUncheckedUpdateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutOffersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutOffersInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutOffersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutOffersInputObjectSchema).optional(),
    upsert: z.lazy(() => ContactUpsertWithoutOffersInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithoutOffersInputObjectSchema),
        z.lazy(() => ContactUncheckedUpdateWithoutOffersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateOneRequiredWithoutOffersNestedInputObjectSchema = Schema;
