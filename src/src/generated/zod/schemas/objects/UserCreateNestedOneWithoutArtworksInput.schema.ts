import { z } from 'zod';
import { UserCreateWithoutArtworksInputObjectSchema } from './UserCreateWithoutArtworksInput.schema';
import { UserUncheckedCreateWithoutArtworksInputObjectSchema } from './UserUncheckedCreateWithoutArtworksInput.schema';
import { UserCreateOrConnectWithoutArtworksInputObjectSchema } from './UserCreateOrConnectWithoutArtworksInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutArtworksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutArtworksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutArtworksInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutArtworksInputObjectSchema = Schema;
