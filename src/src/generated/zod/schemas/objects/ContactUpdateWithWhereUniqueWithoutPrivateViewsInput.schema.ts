import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutPrivateViewsInputObjectSchema } from './ContactUpdateWithoutPrivateViewsInput.schema';
import { ContactUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedUpdateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateWithWhereUniqueWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ContactUpdateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema = Schema;
