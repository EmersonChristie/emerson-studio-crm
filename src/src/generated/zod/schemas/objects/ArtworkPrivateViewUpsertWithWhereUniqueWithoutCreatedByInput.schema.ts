import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
