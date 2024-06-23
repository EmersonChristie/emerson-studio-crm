import { z } from 'zod';
import { ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutImagesInputObjectSchema } from './ImageUncheckedUpdateManyWithoutImagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ImageScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ImageUpdateManyMutationInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateManyWithoutImagesInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpdateManyWithWhereWithoutArtworkInputObjectSchema = Schema;
