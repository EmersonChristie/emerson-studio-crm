import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutInquiriesInputObjectSchema } from './ArtworkCreateNestedManyWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateWithoutContactInput> = z
  .object({
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutInquiriesInputObjectSchema).optional(),
  })
  .strict();

export const InquiryCreateWithoutContactInputObjectSchema = Schema;
