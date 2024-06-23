import { z } from 'zod';
import { ContactCreateWithoutInquiriesInputObjectSchema } from './ContactCreateWithoutInquiriesInput.schema';
import { ContactUncheckedCreateWithoutInquiriesInputObjectSchema } from './ContactUncheckedCreateWithoutInquiriesInput.schema';
import { ContactCreateOrConnectWithoutInquiriesInputObjectSchema } from './ContactCreateOrConnectWithoutInquiriesInput.schema';
import { ContactUpsertWithoutInquiriesInputObjectSchema } from './ContactUpsertWithoutInquiriesInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutInquiriesInputObjectSchema } from './ContactUpdateWithoutInquiriesInput.schema';
import { ContactUncheckedUpdateWithoutInquiriesInputObjectSchema } from './ContactUncheckedUpdateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutInquiriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutInquiriesInputObjectSchema).optional(),
    upsert: z.lazy(() => ContactUpsertWithoutInquiriesInputObjectSchema).optional(),
    connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ContactUncheckedUpdateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema = Schema;
