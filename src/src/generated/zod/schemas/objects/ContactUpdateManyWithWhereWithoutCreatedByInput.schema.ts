import { z } from 'zod';
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema';
import { ContactUpdateManyMutationInputObjectSchema } from './ContactUpdateManyMutationInput.schema';
import { ContactUncheckedUpdateManyWithoutContactsInputObjectSchema } from './ContactUncheckedUpdateManyWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateManyWithWhereWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ContactScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ContactUpdateManyMutationInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateManyWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpdateManyWithWhereWithoutCreatedByInputObjectSchema = Schema;
