import { z } from 'zod';
import { ContactCreateWithoutOffersInputObjectSchema } from './ContactCreateWithoutOffersInput.schema';
import { ContactUncheckedCreateWithoutOffersInputObjectSchema } from './ContactUncheckedCreateWithoutOffersInput.schema';
import { ContactCreateOrConnectWithoutOffersInputObjectSchema } from './ContactCreateOrConnectWithoutOffersInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedOneWithoutOffersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutOffersInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutOffersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutOffersInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateNestedOneWithoutOffersInputObjectSchema = Schema;
