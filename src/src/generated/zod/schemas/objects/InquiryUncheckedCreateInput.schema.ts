import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contactId: z.number(),
    status: z.string().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema).optional(),
  })
  .strict();

export const InquiryUncheckedCreateInputObjectSchema = Schema;
