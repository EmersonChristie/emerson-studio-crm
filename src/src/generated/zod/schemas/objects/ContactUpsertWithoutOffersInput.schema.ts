import { z } from 'zod';
import { ContactUpdateWithoutOffersInputObjectSchema } from './ContactUpdateWithoutOffersInput.schema';
import { ContactUncheckedUpdateWithoutOffersInputObjectSchema } from './ContactUncheckedUpdateWithoutOffersInput.schema';
import { ContactCreateWithoutOffersInputObjectSchema } from './ContactCreateWithoutOffersInput.schema';
import { ContactUncheckedCreateWithoutOffersInputObjectSchema } from './ContactUncheckedCreateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithoutOffersInput> = z
  .object({
    update: z.union([
      z.lazy(() => ContactUpdateWithoutOffersInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutOffersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutOffersInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutOffersInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithoutOffersInputObjectSchema = Schema;
