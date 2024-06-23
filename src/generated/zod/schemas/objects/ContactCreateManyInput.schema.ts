import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    notes: z.string().optional().nullable(),
  })
  .strict();

export const ContactCreateManyInputObjectSchema = Schema;
