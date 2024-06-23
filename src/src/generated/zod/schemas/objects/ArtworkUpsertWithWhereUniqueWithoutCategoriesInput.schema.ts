import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutCategoriesInputObjectSchema } from './ArtworkUpdateWithoutCategoriesInput.schema';
import { ArtworkUncheckedUpdateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutCategoriesInput.schema';
import { ArtworkCreateWithoutCategoriesInputObjectSchema } from './ArtworkCreateWithoutCategoriesInput.schema';
import { ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithWhereUniqueWithoutCategoriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutCategoriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema = Schema;
