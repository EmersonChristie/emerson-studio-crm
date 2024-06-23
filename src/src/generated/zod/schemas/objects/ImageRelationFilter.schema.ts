import { z } from 'zod';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageRelationFilter> = z
  .object({
    is: z
      .lazy(() => ImageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ImageWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ImageRelationFilterObjectSchema = Schema;
