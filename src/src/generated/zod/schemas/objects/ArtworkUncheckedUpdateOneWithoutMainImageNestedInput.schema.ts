import { z } from 'zod';
import { ArtworkCreateWithoutMainImageInputObjectSchema } from './ArtworkCreateWithoutMainImageInput.schema';
import { ArtworkUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateWithoutMainImageInput.schema';
import { ArtworkCreateOrConnectWithoutMainImageInputObjectSchema } from './ArtworkCreateOrConnectWithoutMainImageInput.schema';
import { ArtworkUpsertWithoutMainImageInputObjectSchema } from './ArtworkUpsertWithoutMainImageInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutMainImageInputObjectSchema } from './ArtworkUpdateWithoutMainImageInput.schema';
import { ArtworkUncheckedUpdateWithoutMainImageInputObjectSchema } from './ArtworkUncheckedUpdateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateOneWithoutMainImageNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutMainImageInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkUpsertWithoutMainImageInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithoutMainImageInputObjectSchema),
        z.lazy(() => ArtworkUncheckedUpdateWithoutMainImageInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUncheckedUpdateOneWithoutMainImageNestedInputObjectSchema = Schema;
