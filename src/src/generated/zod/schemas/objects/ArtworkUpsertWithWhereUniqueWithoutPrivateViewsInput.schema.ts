import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutPrivateViewsInputObjectSchema } from './ArtworkUpdateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedUpdateWithoutPrivateViewsInput.schema';
import { ArtworkCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema = Schema;
