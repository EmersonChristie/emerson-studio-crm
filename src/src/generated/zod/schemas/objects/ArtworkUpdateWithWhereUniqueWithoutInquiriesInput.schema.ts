import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUpdateWithoutInquiriesInput.schema';
import { ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithWhereUniqueWithoutInquiriesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateWithoutInquiriesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema = Schema;
