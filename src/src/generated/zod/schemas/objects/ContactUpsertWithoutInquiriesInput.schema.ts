import { z } from 'zod';
import { ContactUpdateWithoutInquiriesInputObjectSchema } from './ContactUpdateWithoutInquiriesInput.schema';
import { ContactUncheckedUpdateWithoutInquiriesInputObjectSchema } from './ContactUncheckedUpdateWithoutInquiriesInput.schema';
import { ContactCreateWithoutInquiriesInputObjectSchema } from './ContactCreateWithoutInquiriesInput.schema';
import { ContactUncheckedCreateWithoutInquiriesInputObjectSchema } from './ContactUncheckedCreateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithoutInquiriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ContactUpdateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutInquiriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithoutInquiriesInputObjectSchema = Schema;
