import { z } from 'zod';
import { ArtworkUpdateWithoutImagesInputObjectSchema } from './ArtworkUpdateWithoutImagesInput.schema';
import { ArtworkUncheckedUpdateWithoutImagesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutImagesInput.schema';
import { ArtworkCreateWithoutImagesInputObjectSchema } from './ArtworkCreateWithoutImagesInput.schema';
import { ArtworkUncheckedCreateWithoutImagesInputObjectSchema } from './ArtworkUncheckedCreateWithoutImagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithoutImagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutImagesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutImagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutImagesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutImagesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithoutImagesInputObjectSchema = Schema;
