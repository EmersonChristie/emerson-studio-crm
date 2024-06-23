import { z } from 'zod';
import { ArtworkUpdateWithoutSalesInputObjectSchema } from './ArtworkUpdateWithoutSalesInput.schema';
import { ArtworkUncheckedUpdateWithoutSalesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutSalesInput.schema';
import { ArtworkCreateWithoutSalesInputObjectSchema } from './ArtworkCreateWithoutSalesInput.schema';
import { ArtworkUncheckedCreateWithoutSalesInputObjectSchema } from './ArtworkUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithoutSalesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutSalesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutSalesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithoutSalesInputObjectSchema = Schema;
