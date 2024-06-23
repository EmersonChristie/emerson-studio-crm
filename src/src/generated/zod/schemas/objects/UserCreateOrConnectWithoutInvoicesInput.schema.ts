import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvoicesInputObjectSchema } from './UserCreateWithoutInvoicesInput.schema';
import { UserUncheckedCreateWithoutInvoicesInputObjectSchema } from './UserUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvoicesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutInvoicesInputObjectSchema = Schema;
