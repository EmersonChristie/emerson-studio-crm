import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutCreatedByInputObjectSchema } from './ArtworkUpdateWithoutCreatedByInput.schema';
import { ArtworkUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedUpdateWithoutCreatedByInput.schema';
import { ArtworkCreateWithoutCreatedByInputObjectSchema } from './ArtworkCreateWithoutCreatedByInput.schema';
import { ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
