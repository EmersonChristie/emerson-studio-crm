import { z } from 'zod';
import { UserCreateWithoutInvoicesInputObjectSchema } from './UserCreateWithoutInvoicesInput.schema';
import { UserUncheckedCreateWithoutInvoicesInputObjectSchema } from './UserUncheckedCreateWithoutInvoicesInput.schema';
import { UserCreateOrConnectWithoutInvoicesInputObjectSchema } from './UserCreateOrConnectWithoutInvoicesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvoicesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutInvoicesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutInvoicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutInvoicesInputObjectSchema = Schema;
