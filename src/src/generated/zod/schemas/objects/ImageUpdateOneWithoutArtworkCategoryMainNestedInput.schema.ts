import { z } from 'zod';
import { ImageCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkCategoryMainInput.schema';
import { ImageCreateOrConnectWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkCategoryMainInput.schema';
import { ImageUpsertWithoutArtworkCategoryMainInputObjectSchema } from './ImageUpsertWithoutArtworkCategoryMainInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUpdateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedUpdateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkCategoryMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateOneWithoutArtworkCategoryMainNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkCategoryMainInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutArtworkCategoryMainInputObjectSchema).optional(),
    upsert: z.lazy(() => ImageUpsertWithoutArtworkCategoryMainInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ImageUpdateWithoutArtworkCategoryMainInputObjectSchema),
        z.lazy(() => ImageUncheckedUpdateWithoutArtworkCategoryMainInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ImageUpdateOneWithoutArtworkCategoryMainNestedInputObjectSchema = Schema;
