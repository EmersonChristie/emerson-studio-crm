import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutInquiriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema = Schema;
