import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutPrivateViewsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema = Schema;
