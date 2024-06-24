import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCreateWithoutContactInput> = z
  .object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  })
  .strict();

export const ContactAddressCreateWithoutContactInputObjectSchema = Schema;
