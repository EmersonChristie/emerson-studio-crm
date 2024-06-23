import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutCreatedByInputObjectSchema } from './ArtworkUpdateWithoutCreatedByInput.schema';
import { ArtworkUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
