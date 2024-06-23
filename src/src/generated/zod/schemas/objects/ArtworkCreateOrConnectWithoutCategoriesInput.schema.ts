import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutCategoriesInputObjectSchema } from './ArtworkCreateWithoutCategoriesInput.schema';
import { ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutCategoriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
