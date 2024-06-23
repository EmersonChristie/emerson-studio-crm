import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutInquiriesInputObjectSchema } from './ContactCreateWithoutInquiriesInput.schema';
import { ContactUncheckedCreateWithoutInquiriesInputObjectSchema } from './ContactUncheckedCreateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutInquiriesInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutInquiriesInputObjectSchema = Schema;
