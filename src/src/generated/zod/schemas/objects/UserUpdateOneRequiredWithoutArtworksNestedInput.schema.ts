import { z } from 'zod';
import { UserCreateWithoutArtworksInputObjectSchema } from './UserCreateWithoutArtworksInput.schema';
import { UserUncheckedCreateWithoutArtworksInputObjectSchema } from './UserUncheckedCreateWithoutArtworksInput.schema';
import { UserCreateOrConnectWithoutArtworksInputObjectSchema } from './UserCreateOrConnectWithoutArtworksInput.schema';
import { UserUpsertWithoutArtworksInputObjectSchema } from './UserUpsertWithoutArtworksInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutArtworksInputObjectSchema } from './UserUpdateWithoutArtworksInput.schema';
import { UserUncheckedUpdateWithoutArtworksInputObjectSchema } from './UserUncheckedUpdateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutArtworksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutArtworksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutArtworksInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutArtworksInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutArtworksInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutArtworksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutArtworksNestedInputObjectSchema = Schema;
