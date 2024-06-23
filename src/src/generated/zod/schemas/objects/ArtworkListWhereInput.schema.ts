import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ArtworkListRelationFilterObjectSchema } from './ArtworkListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => ArtworkListWhereInputObjectSchema), z.lazy(() => ArtworkListWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => ArtworkListWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => ArtworkListWhereInputObjectSchema), z.lazy(() => ArtworkListWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    artworks: z.lazy(() => ArtworkListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArtworkListWhereInputObjectSchema = Schema;
