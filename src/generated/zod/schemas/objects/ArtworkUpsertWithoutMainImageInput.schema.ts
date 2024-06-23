import { z } from 'zod';
import { ArtworkUpdateWithoutMainImageInputObjectSchema } from './ArtworkUpdateWithoutMainImageInput.schema';
import { ArtworkUncheckedUpdateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedUpdateWithoutMainImageInput.schema';
import { ArtworkCreateWithoutMainImageInputObjectSchema } from './ArtworkCreateWithoutMainImageInput.schema';
import { ArtworkUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithoutMainImageInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutMainImageInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutMainImageInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithoutMainImageInputObjectSchema = Schema;
