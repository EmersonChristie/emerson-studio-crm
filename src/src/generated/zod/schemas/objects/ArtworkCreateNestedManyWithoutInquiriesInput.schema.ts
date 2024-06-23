import { z } from 'zod';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';
import { ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutInquiriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedManyWithoutInquiriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCreateNestedManyWithoutInquiriesInputObjectSchema = Schema;
