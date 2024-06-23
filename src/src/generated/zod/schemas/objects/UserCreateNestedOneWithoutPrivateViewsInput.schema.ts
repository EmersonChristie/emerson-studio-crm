import { z } from 'zod';
import { UserCreateWithoutPrivateViewsInputObjectSchema } from './UserCreateWithoutPrivateViewsInput.schema';
import { UserUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedCreateWithoutPrivateViewsInput.schema';
import { UserCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './UserCreateOrConnectWithoutPrivateViewsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPrivateViewsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPrivateViewsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPrivateViewsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPrivateViewsInputObjectSchema = Schema;
