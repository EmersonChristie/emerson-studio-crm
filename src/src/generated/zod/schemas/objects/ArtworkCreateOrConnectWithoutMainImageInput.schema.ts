import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutMainImageInputObjectSchema } from './ArtworkCreateWithoutMainImageInput.schema';
import { ArtworkUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutMainImageInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutMainImageInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutMainImageInputObjectSchema = Schema;
