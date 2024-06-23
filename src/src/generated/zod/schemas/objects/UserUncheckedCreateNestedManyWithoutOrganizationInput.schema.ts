import { z } from 'zod';
import { UserCreateWithoutOrganizationInputObjectSchema } from './UserCreateWithoutOrganizationInput.schema';
import { UserUncheckedCreateWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInput.schema';
import { UserCreateOrConnectWithoutOrganizationInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInput.schema';
import { UserCreateManyOrganizationInputEnvelopeObjectSchema } from './UserCreateManyOrganizationInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutOrganizationInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => UserCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema = Schema;
