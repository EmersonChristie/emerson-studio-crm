import { z } from 'zod';
import { ContactCreateWithoutPrivateViewsInputObjectSchema } from './ContactCreateWithoutPrivateViewsInput.schema';
import { ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateWithoutPrivateViewsInput.schema';
import { ContactCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './ContactCreateOrConnectWithoutPrivateViewsInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedManyWithoutPrivateViewsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactCreateWithoutPrivateViewsInputObjectSchema).array(),
        z.lazy(() => ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ContactCreateOrConnectWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactCreateOrConnectWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ContactCreateNestedManyWithoutPrivateViewsInputObjectSchema = Schema;
