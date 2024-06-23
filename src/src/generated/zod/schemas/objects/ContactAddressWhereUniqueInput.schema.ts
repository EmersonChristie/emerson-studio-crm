import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    contactId: z.number().optional(),
  })
  .strict();

export const ContactAddressWhereUniqueInputObjectSchema = Schema;
