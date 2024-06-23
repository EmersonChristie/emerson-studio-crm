import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutPrivateViewsInputObjectSchema } from './ContactUpdateWithoutPrivateViewsInput.schema';
import { ContactUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedUpdateWithoutPrivateViewsInput.schema';
import { ContactCreateWithoutPrivateViewsInputObjectSchema } from './ContactCreateWithoutPrivateViewsInput.schema';
import { ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithWhereUniqueWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ContactUpdateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema = Schema;
