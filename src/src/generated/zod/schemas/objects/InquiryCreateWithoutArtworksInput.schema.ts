import { z } from 'zod';
import { ContactCreateNestedOneWithoutInquiriesInputObjectSchema } from './ContactCreateNestedOneWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateWithoutArtworksInput> = z
  .object({
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
    contact: z.lazy(() => ContactCreateNestedOneWithoutInquiriesInputObjectSchema),
  })
  .strict();

export const InquiryCreateWithoutArtworksInputObjectSchema = Schema;
