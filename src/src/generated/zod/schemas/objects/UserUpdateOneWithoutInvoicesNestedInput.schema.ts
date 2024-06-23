import { z } from 'zod';
import { UserCreateWithoutInvoicesInputObjectSchema } from './UserCreateWithoutInvoicesInput.schema';
import { UserUncheckedCreateWithoutInvoicesInputObjectSchema } from './UserUncheckedCreateWithoutInvoicesInput.schema';
import { UserCreateOrConnectWithoutInvoicesInputObjectSchema } from './UserCreateOrConnectWithoutInvoicesInput.schema';
import { UserUpsertWithoutInvoicesInputObjectSchema } from './UserUpsertWithoutInvoicesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutInvoicesInputObjectSchema } from './UserUpdateWithoutInvoicesInput.schema';
import { UserUncheckedUpdateWithoutInvoicesInputObjectSchema } from './UserUncheckedUpdateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutInvoicesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutInvoicesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutInvoicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutInvoicesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutInvoicesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutInvoicesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutInvoicesNestedInputObjectSchema = Schema;
