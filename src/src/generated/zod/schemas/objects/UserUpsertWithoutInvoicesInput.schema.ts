import { z } from 'zod';
import { UserUpdateWithoutInvoicesInputObjectSchema } from './UserUpdateWithoutInvoicesInput.schema';
import { UserUncheckedUpdateWithoutInvoicesInputObjectSchema } from './UserUncheckedUpdateWithoutInvoicesInput.schema';
import { UserCreateWithoutInvoicesInputObjectSchema } from './UserCreateWithoutInvoicesInput.schema';
import { UserUncheckedCreateWithoutInvoicesInputObjectSchema } from './UserUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutInvoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutInvoicesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutInvoicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutInvoicesInputObjectSchema = Schema;
