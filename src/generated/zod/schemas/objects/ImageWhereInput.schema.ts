import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ArtworkRelationFilterObjectSchema } from './ArtworkRelationFilter.schema';
import { ArtworkWhereInputObjectSchema } from './ArtworkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => ImageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    altText: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    artworkId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    isMain: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    artworkMain: z
      .union([z.lazy(() => ArtworkRelationFilterObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema)])
      .optional()
      .nullable(),
    artwork: z
      .union([z.lazy(() => ArtworkRelationFilterObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const ImageWhereInputObjectSchema = Schema;
