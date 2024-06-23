import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutCreatedByInputObjectSchema } from './ArtworkCreateWithoutCreatedByInput.schema';
import { ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
