import { z } from 'zod';
import { ImageCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkCategoryMainInput.schema';
import { ImageCreateOrConnectWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkCategoryMainInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateNestedOneWithoutArtworkCategoryMainInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkCategoryMainInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutArtworkCategoryMainInputObjectSchema).optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateNestedOneWithoutArtworkCategoryMainInputObjectSchema = Schema;
