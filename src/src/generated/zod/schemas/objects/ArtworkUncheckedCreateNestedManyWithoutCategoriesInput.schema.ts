import { z } from 'zod';
import { ArtworkCreateWithoutCategoriesInputObjectSchema } from './ArtworkCreateWithoutCategoriesInput.schema';
import { ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutCategoriesInput.schema';
import { ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutCategoriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateNestedManyWithoutCategoriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema = Schema;
