import { z } from 'zod';
import { UserCreateWithoutPrivateViewsInputObjectSchema } from './UserCreateWithoutPrivateViewsInput.schema';
import { UserUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedCreateWithoutPrivateViewsInput.schema';
import { UserCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './UserCreateOrConnectWithoutPrivateViewsInput.schema';
import { UserUpsertWithoutPrivateViewsInputObjectSchema } from './UserUpsertWithoutPrivateViewsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPrivateViewsInputObjectSchema } from './UserUpdateWithoutPrivateViewsInput.schema';
import { UserUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedUpdateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPrivateViewsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPrivateViewsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPrivateViewsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutPrivateViewsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutPrivateViewsNestedInputObjectSchema = Schema;
