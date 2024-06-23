import { z } from 'zod';
import { ArtworkCreateWithoutImagesInputObjectSchema } from './ArtworkCreateWithoutImagesInput.schema';
import { ArtworkUncheckedCreateWithoutImagesInputObjectSchema } from './ArtworkUncheckedCreateWithoutImagesInput.schema';
import { ArtworkCreateOrConnectWithoutImagesInputObjectSchema } from './ArtworkCreateOrConnectWithoutImagesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedOneWithoutImagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutImagesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutImagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutImagesInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateNestedOneWithoutImagesInputObjectSchema = Schema;
