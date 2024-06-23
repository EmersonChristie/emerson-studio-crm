import { z } from 'zod';
import { ArtworkCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateWithoutPrivateViewsInput.schema';
import { ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateOrConnectWithoutPrivateViewsInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedManyWithoutPrivateViewsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCreateNestedManyWithoutPrivateViewsInputObjectSchema = Schema;
