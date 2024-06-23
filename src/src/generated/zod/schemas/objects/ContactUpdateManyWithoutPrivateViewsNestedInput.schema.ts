import { z } from 'zod';
import { ContactCreateWithoutPrivateViewsInputObjectSchema } from './ContactCreateWithoutPrivateViewsInput.schema';
import { ContactUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateWithoutPrivateViewsInput.schema';
import { ContactCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './ContactCreateOrConnectWithoutPrivateViewsInput.schema';
import { ContactUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema } from './ContactUpsertWithWhereUniqueWithoutPrivateViewsInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema } from './ContactUpdateWithWhereUniqueWithoutPrivateViewsInput.schema';
import { ContactUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema } from './ContactUpdateManyWithWhereWithoutPrivateViewsInput.schema';
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateManyWithoutPrivateViewsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ContactUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ContactUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ContactScalarWhereInputObjectSchema),
        z.lazy(() => ContactScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateManyWithoutPrivateViewsNestedInputObjectSchema = Schema;
