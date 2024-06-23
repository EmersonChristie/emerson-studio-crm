import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressUncheckedCreateWithoutContactInput> = z
  .object({
    id: z.number().optional(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  })
  .strict();

export const ContactAddressUncheckedCreateWithoutContactInputObjectSchema = Schema;
