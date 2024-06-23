import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutImagesInputObjectSchema } from './ArtworkCreateWithoutImagesInput.schema';
import { ArtworkUncheckedCreateWithoutImagesInputObjectSchema } from './ArtworkUncheckedCreateWithoutImagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutImagesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutImagesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutImagesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutImagesInputObjectSchema = Schema;
