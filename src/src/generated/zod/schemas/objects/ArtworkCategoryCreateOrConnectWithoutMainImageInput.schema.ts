import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryCreateOrConnectWithoutMainImageInput> = z
  .object({
    where: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCategoryCreateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryCreateOrConnectWithoutMainImageInputObjectSchema = Schema;
