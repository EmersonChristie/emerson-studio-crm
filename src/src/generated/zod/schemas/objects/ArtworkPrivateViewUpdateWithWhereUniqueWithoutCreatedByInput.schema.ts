import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
