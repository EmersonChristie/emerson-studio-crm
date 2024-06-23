import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUpdateWithoutInquiriesInput.schema';
import { ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutInquiriesInput.schema';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithWhereUniqueWithoutInquiriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema = Schema;
