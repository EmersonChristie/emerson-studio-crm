import { z } from 'zod';
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema';
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema';
import { UserCreateOrConnectWithoutContactsInputObjectSchema } from './UserCreateOrConnectWithoutContactsInput.schema';
import { UserUpsertWithoutContactsInputObjectSchema } from './UserUpsertWithoutContactsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutContactsInputObjectSchema } from './UserUpdateWithoutContactsInput.schema';
import { UserUncheckedUpdateWithoutContactsInputObjectSchema } from './UserUncheckedUpdateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutContactsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutContactsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutContactsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutContactsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutContactsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutContactsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutContactsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutContactsNestedInputObjectSchema = Schema;
