import { z } from 'zod';
import { UserUpdateWithoutArtworksInputObjectSchema } from './UserUpdateWithoutArtworksInput.schema';
import { UserUncheckedUpdateWithoutArtworksInputObjectSchema } from './UserUncheckedUpdateWithoutArtworksInput.schema';
import { UserCreateWithoutArtworksInputObjectSchema } from './UserCreateWithoutArtworksInput.schema';
import { UserUncheckedCreateWithoutArtworksInputObjectSchema } from './UserUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutArtworksInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutArtworksInputObjectSchema = Schema;
