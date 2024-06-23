import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutArtworkInputObjectSchema } from './SaleCreateWithoutArtworkInput.schema';
import { SaleUncheckedCreateWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutArtworkInputObjectSchema = Schema;
