import { z } from 'zod';
import { ContactCreateNestedOneWithoutAddressInputObjectSchema } from './ContactCreateNestedOneWithoutAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCreateInput> = z
  .object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutAddressInputObjectSchema),
  })
  .strict();

export const ContactAddressCreateInputObjectSchema = Schema;
