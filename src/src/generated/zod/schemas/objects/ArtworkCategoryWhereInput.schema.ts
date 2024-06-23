import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ArtworkListRelationFilterObjectSchema } from './ArtworkListRelationFilter.schema';
import { ImageRelationFilterObjectSchema } from './ImageRelationFilter.schema';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtworkCategoryWhereInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtworkCategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtworkCategoryWhereInputObjectSchema),
        z.lazy(() => ArtworkCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    mainImageId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    artworks: z.lazy(() => ArtworkListRelationFilterObjectSchema).optional(),
    mainImage: z
      .union([z.lazy(() => ImageRelationFilterObjectSchema), z.lazy(() => ImageWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const ArtworkCategoryWhereInputObjectSchema = Schema;
