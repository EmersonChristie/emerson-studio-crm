import { z } from 'zod';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';
import { ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutInquiriesInput.schema';
import { ArtworkUpsertWithoutInquiriesInputObjectSchema } from './ArtworkUpsertWithoutInquiriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUpdateWithoutInquiriesInput.schema';
import { ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateOneRequiredWithoutInquiriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkUpsertWithoutInquiriesInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema = Schema;
