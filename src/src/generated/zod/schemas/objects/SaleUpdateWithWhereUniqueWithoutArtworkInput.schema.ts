import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutArtworkInputObjectSchema } from './SaleUpdateWithoutArtworkInput.schema';
import { SaleUncheckedUpdateWithoutArtworkInputObjectSchema } from './SaleUncheckedUpdateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
