import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkCategoryMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateOrConnectWithoutArtworkCategoryMainInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkCategoryMainInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema),
    ]),
  })
  .strict();

export const ImageCreateOrConnectWithoutArtworkCategoryMainInputObjectSchema = Schema;
