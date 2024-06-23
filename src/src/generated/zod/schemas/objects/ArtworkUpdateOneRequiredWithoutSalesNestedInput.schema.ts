import { z } from 'zod';
import { ArtworkCreateWithoutSalesInputObjectSchema } from './ArtworkCreateWithoutSalesInput.schema';
import { ArtworkUncheckedCreateWithoutSalesInputObjectSchema } from './ArtworkUncheckedCreateWithoutSalesInput.schema';
import { ArtworkCreateOrConnectWithoutSalesInputObjectSchema } from './ArtworkCreateOrConnectWithoutSalesInput.schema';
import { ArtworkUpsertWithoutSalesInputObjectSchema } from './ArtworkUpsertWithoutSalesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutSalesInputObjectSchema } from './ArtworkUpdateWithoutSalesInput.schema';
import { ArtworkUncheckedUpdateWithoutSalesInputObjectSchema } from './ArtworkUncheckedUpdateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateOneRequiredWithoutSalesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutSalesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ArtworkCreateOrConnectWithoutSalesInputObjectSchema).optional(),
    upsert: z.lazy(() => ArtworkUpsertWithoutSalesInputObjectSchema).optional(),
    connect: z.lazy(() => ArtworkWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithoutSalesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedUpdateWithoutSalesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUpdateOneRequiredWithoutSalesNestedInputObjectSchema = Schema;
