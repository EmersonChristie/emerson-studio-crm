import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ArtworkListRelationFilterObjectSchema } from './ArtworkListRelationFilter.schema';
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => InquiryWhereInputObjectSchema), z.lazy(() => InquiryWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => InquiryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => InquiryWhereInputObjectSchema), z.lazy(() => InquiryWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    artworks: z.lazy(() => ArtworkListRelationFilterObjectSchema).optional(),
    contact: z
      .union([z.lazy(() => ContactRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)])
      .optional(),
  })
  .strict();

export const InquiryWhereInputObjectSchema = Schema;
