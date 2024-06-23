import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutPrivateViewsInputObjectSchema } from './ContactCreateWithoutPrivateViewsInput.schema';
import { ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutPrivateViewsInputObjectSchema = Schema;
