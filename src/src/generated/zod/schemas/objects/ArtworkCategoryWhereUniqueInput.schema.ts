import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    mainImageId: z.number().optional(),
  })
  .strict();

export const ArtworkCategoryWhereUniqueInputObjectSchema = Schema;
