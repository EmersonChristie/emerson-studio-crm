import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateManyInput> = z
  .object({
    id: z.number().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artist: z.string().optional().nullable(),
    status: z.string().optional(),
    mainImageId: z.number().optional().nullable(),
    createdById: z.number(),
  })
  .strict();

export const ArtworkCreateManyInputObjectSchema = Schema;
