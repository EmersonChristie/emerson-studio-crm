import { z } from 'zod';
import { ArtworkCategoryCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutMainImageInput.schema';
import { ArtworkCategoryCreateOrConnectWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateOrConnectWithoutMainImageInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCategoryCreateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCategoryCreateOrConnectWithoutMainImageInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInputObjectSchema = Schema;
