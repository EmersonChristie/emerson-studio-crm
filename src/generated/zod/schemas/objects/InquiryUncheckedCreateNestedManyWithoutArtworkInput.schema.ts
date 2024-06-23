import { z } from 'zod';
import { InquiryCreateWithoutArtworkInputObjectSchema } from './InquiryCreateWithoutArtworkInput.schema';
import { InquiryUncheckedCreateWithoutArtworkInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworkInput.schema';
import { InquiryCreateOrConnectWithoutArtworkInputObjectSchema } from './InquiryCreateOrConnectWithoutArtworkInput.schema';
import { InquiryCreateManyArtworkInputEnvelopeObjectSchema } from './InquiryCreateManyArtworkInputEnvelope.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateNestedManyWithoutArtworkInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InquiryCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InquiryCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InquiryUncheckedCreateNestedManyWithoutArtworkInputObjectSchema = Schema;
