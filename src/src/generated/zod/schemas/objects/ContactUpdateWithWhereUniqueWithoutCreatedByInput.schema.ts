import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutCreatedByInputObjectSchema } from './ContactUpdateWithoutCreatedByInput.schema';
import { ContactUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ContactUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ContactUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
