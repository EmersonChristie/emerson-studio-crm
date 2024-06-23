import { z } from 'zod';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageListRelationFilter> = z
  .object({
    every: z.lazy(() => ImageWhereInputObjectSchema).optional(),
    some: z.lazy(() => ImageWhereInputObjectSchema).optional(),
    none: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  })
  .strict();

export const ImageListRelationFilterObjectSchema = Schema;
