import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const InquiryWhereUniqueInputObjectSchema = Schema;
