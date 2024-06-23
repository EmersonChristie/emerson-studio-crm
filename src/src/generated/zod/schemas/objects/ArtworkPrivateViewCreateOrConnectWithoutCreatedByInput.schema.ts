import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
