import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateWithoutContactInput> = z
  .object({
    id: z.number().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema).optional(),
  })
  .strict();

export const InquiryUncheckedCreateWithoutContactInputObjectSchema = Schema;
