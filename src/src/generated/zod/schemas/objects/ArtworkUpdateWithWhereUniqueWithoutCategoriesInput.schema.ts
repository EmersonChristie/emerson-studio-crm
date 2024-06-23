import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutCategoriesInputObjectSchema } from './ArtworkUpdateWithoutCategoriesInput.schema';
import { ArtworkUncheckedUpdateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithWhereUniqueWithoutCategoriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateWithoutCategoriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema = Schema;
