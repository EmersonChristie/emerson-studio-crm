import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutCreatedByInputObjectSchema } from './ContactUpdateWithoutCreatedByInput.schema';
import { ContactUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ContactUncheckedUpdateWithoutCreatedByInput.schema';
import { ContactCreateWithoutCreatedByInputObjectSchema } from './ContactCreateWithoutCreatedByInput.schema';
import { ContactUncheckedCreateWithoutCreatedByInputObjectSchema } from './ContactUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ContactUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
