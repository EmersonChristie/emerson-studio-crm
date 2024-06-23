import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema';
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutContactsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutContactsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutContactsInputObjectSchema = Schema;
