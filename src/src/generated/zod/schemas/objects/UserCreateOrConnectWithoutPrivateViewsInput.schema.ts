import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPrivateViewsInputObjectSchema } from './UserCreateWithoutPrivateViewsInput.schema';
import { UserUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './UserUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPrivateViewsInputObjectSchema = Schema;
