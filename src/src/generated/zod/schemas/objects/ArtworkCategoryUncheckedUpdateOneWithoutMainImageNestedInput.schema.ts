import { z } from 'zod';
import { ArtworkCategoryCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutMainImageInput.schema';
import { ArtworkCategoryCreateOrConnectWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateOrConnectWithoutMainImageInput.schema';
import { ArtworkCategoryUpsertWithoutMainImageInputObjectSchema } from './ArtworkCategoryUpsertWithoutMainImageInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryUpdateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUpdateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedUpdateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedUpdateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedUpdateOneWithoutMainImageNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCategoryCreateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCategoryCreateOrConnectWithoutMainImageInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkCategoryUpsertWithoutMainImageInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtworkCategoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkCategoryUpdateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkCategoryUncheckedUpdateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema = Schema;
