import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutPrivateViewsInputObjectSchema } from './ArtworkUpdateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedUpdateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedUpdateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema = Schema;
