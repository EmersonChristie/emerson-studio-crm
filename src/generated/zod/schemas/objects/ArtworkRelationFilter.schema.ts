import { z } from 'zod';
import { ArtworkWhereInputObjectSchema } from './ArtworkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArtworkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArtworkWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArtworkRelationFilterObjectSchema = Schema;
