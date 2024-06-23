import { z } from 'zod';
import { ArtworkCreateWithoutMainImageInputObjectSchema } from './ArtworkCreateWithoutMainImageInput.schema';
import { ArtworkUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateWithoutMainImageInput.schema';
import { ArtworkCreateOrConnectWithoutMainImageInputObjectSchema } from './ArtworkCreateOrConnectWithoutMainImageInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateNestedOneWithoutMainImageInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutMainImageInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkUncheckedCreateNestedOneWithoutMainImageInputObjectSchema = Schema;
