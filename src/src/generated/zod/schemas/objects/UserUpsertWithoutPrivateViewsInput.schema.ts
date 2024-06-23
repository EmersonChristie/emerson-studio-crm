import { z } from 'zod';
import { UserUpdateWithoutPrivateViewsInputObjectSchema } from './UserUpdateWithoutPrivateViewsInput.schema';
import { UserUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedUpdateWithoutPrivateViewsInput.schema';
import { UserCreateWithoutPrivateViewsInputObjectSchema } from './UserCreateWithoutPrivateViewsInput.schema';
import { UserUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPrivateViewsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPrivateViewsInputObjectSchema = Schema;
