import { z } from 'zod';
import { ArtworkPrivateViewScalarWhereInputObjectSchema } from './ArtworkPrivateViewScalarWhereInput.schema';
import { ArtworkPrivateViewUpdateManyMutationInputObjectSchema } from './ArtworkPrivateViewUpdateManyMutationInput.schema';
import { ArtworkPrivateViewUncheckedUpdateManyWithoutPrivateViewsInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateManyWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateManyWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInputObjectSchema = Schema;
