import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ImageRelationFilterObjectSchema } from './ImageRelationFilter.schema';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageListRelationFilterObjectSchema } from './ImageListRelationFilter.schema';
import { InquiryListRelationFilterObjectSchema } from './InquiryListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => ArtworkWhereInputObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => ArtworkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => ArtworkWhereInputObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    artist: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    category: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    mainImageId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    mainImage: z
      .union([z.lazy(() => ImageRelationFilterObjectSchema), z.lazy(() => ImageWhereInputObjectSchema)])
      .optional()
      .nullable(),
    images: z.lazy(() => ImageListRelationFilterObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryListRelationFilterObjectSchema).optional(),
    sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArtworkWhereInputObjectSchema = Schema;
