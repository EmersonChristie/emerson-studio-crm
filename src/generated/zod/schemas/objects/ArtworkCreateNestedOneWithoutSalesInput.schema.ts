import { z } from 'zod';
import { ArtworkCreateWithoutSalesInputObjectSchema } from './ArtworkCreateWithoutSalesInput.schema';
import { ArtworkUncheckedCreateWithoutSalesInputObjectSchema } from './ArtworkUncheckedCreateWithoutSalesInput.schema';
import { ArtworkCreateOrConnectWithoutSalesInputObjectSchema } from './ArtworkCreateOrConnectWithoutSalesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedOneWithoutSalesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutSalesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCreateNestedOneWithoutSalesInputObjectSchema = Schema;
