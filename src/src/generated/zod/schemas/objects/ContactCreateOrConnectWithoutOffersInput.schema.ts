import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutOffersInputObjectSchema } from './ContactCreateWithoutOffersInput.schema';
import { ContactUncheckedCreateWithoutOffersInputObjectSchema } from './ContactUncheckedCreateWithoutOffersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutOffersInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutOffersInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutOffersInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutOffersInputObjectSchema = Schema;
