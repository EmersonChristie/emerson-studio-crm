import { z } from 'zod';
import { InquiryCreateWithoutContactInputObjectSchema } from './InquiryCreateWithoutContactInput.schema';
import { InquiryUncheckedCreateWithoutContactInputObjectSchema } from './InquiryUncheckedCreateWithoutContactInput.schema';
import { InquiryCreateOrConnectWithoutContactInputObjectSchema } from './InquiryCreateOrConnectWithoutContactInput.schema';
import { InquiryCreateManyContactInputEnvelopeObjectSchema } from './InquiryCreateManyContactInputEnvelope.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateNestedManyWithoutContactInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InquiryCreateWithoutContactInputObjectSchema),
        z.lazy(() => InquiryCreateWithoutContactInputObjectSchema).array(),
        z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema),
        z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InquiryCreateOrConnectWithoutContactInputObjectSchema),
        z.lazy(() => InquiryCreateOrConnectWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InquiryCreateManyContactInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InquiryUncheckedCreateNestedManyWithoutContactInputObjectSchema = Schema;
