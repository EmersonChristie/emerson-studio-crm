import { z } from 'zod';
import { ContactCreateManyCreatedByInputObjectSchema } from './ContactCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ContactCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ContactCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ContactCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
