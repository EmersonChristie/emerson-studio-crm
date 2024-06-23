import { z } from 'zod';
import { UserCreateManyOrganizationInputObjectSchema } from './UserCreateManyOrganizationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyOrganizationInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateManyOrganizationInputObjectSchema),
      z.lazy(() => UserCreateManyOrganizationInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyOrganizationInputEnvelopeObjectSchema = Schema;
