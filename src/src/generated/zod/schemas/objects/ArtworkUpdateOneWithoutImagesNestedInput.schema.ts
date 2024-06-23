import { z } from 'zod';
import { ArtworkCreateWithoutImagesInputObjectSchema } from './ArtworkCreateWithoutImagesInput.schema';
import { ArtworkUncheckedCreateWithoutImagesInputObjectSchema } from './ArtworkUncheckedCreateWithoutImagesInput.schema';
import { ArtworkCreateOrConnectWithoutImagesInputObjectSchema } from './ArtworkCreateOrConnectWithoutImagesInput.schema';
import { ArtworkUpsertWithoutImagesInputObjectSchema } from './ArtworkUpsertWithoutImagesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutImagesInputObjectSchema } from './ArtworkUpdateWithoutImagesInput.schema';
import { ArtworkUncheckedUpdateWithoutImagesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutImagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateOneWithoutImagesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutImagesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutImagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutImagesInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkUpsertWithoutImagesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithoutImagesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedUpdateWithoutImagesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUpdateOneWithoutImagesNestedInputObjectSchema = Schema;
