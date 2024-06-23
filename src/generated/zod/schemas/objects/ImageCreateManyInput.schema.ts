import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateManyInput> = z
  .object({
    id: z.number().optional(),
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworkId: z.number().optional().nullable(),
    isMain: z.boolean().optional(),
  })
  .strict();

export const ImageCreateManyInputObjectSchema = Schema;
