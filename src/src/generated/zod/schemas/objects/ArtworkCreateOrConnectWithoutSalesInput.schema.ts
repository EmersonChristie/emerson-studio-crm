import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutSalesInputObjectSchema } from './ArtworkCreateWithoutSalesInput.schema';
import { ArtworkUncheckedCreateWithoutSalesInputObjectSchema } from './ArtworkUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutSalesInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutSalesInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutSalesInputObjectSchema = Schema;
