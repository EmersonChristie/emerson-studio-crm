import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutCreatedByInputObjectSchema } from './ContactCreateWithoutCreatedByInput.schema';
import { ContactUncheckedCreateWithoutCreatedByInputObjectSchema } from './ContactUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
