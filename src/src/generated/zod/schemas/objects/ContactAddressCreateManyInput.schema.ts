import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCreateManyInput> = z
  .object({
    id: z.number().optional(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    contactId: z.number(),
  })
  .strict();

export const ContactAddressCreateManyInputObjectSchema = Schema;
