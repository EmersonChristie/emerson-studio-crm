import { z } from 'zod';
import { InquiryWhereInputObjectSchema } from './InquiryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryListRelationFilter> = z
  .object({
    every: z.lazy(() => InquiryWhereInputObjectSchema).optional(),
    some: z.lazy(() => InquiryWhereInputObjectSchema).optional(),
    none: z.lazy(() => InquiryWhereInputObjectSchema).optional(),
  })
  .strict();

export const InquiryListRelationFilterObjectSchema = Schema;
