import { z } from 'zod';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';
import { ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutInquiriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedOneWithoutInquiriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateNestedOneWithoutInquiriesInputObjectSchema = Schema;
