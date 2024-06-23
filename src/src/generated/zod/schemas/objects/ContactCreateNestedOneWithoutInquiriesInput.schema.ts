import { z } from 'zod';
import { ContactCreateWithoutInquiriesInputObjectSchema } from './ContactCreateWithoutInquiriesInput.schema';
import { ContactUncheckedCreateWithoutInquiriesInputObjectSchema } from './ContactUncheckedCreateWithoutInquiriesInput.schema';
import { ContactCreateOrConnectWithoutInquiriesInputObjectSchema } from './ContactCreateOrConnectWithoutInquiriesInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedOneWithoutInquiriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutInquiriesInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ContactCreateNestedOneWithoutInquiriesInputObjectSchema = Schema;
