import { z } from 'zod';
import { UserCreateWithoutOrganizationInputObjectSchema } from './UserCreateWithoutOrganizationInput.schema';
import { UserUncheckedCreateWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInput.schema';
import { UserCreateOrConnectWithoutOrganizationInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInput.schema';
import { UserUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { UserCreateManyOrganizationInputEnvelopeObjectSchema } from './UserCreateManyOrganizationInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { UserUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './UserUpdateManyWithWhereWithoutOrganizationInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutOrganizationNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => UserCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutOrganizationInputObjectSchema),
        z.lazy(() => UserUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutOrganizationNestedInputObjectSchema = Schema;
