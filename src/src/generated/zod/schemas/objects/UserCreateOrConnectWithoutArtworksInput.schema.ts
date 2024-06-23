import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutArtworksInputObjectSchema } from './UserCreateWithoutArtworksInput.schema';
import { UserUncheckedCreateWithoutArtworksInputObjectSchema } from './UserUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutArtworksInputObjectSchema = Schema;
