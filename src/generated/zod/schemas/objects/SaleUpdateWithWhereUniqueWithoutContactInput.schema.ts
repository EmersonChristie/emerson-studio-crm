import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutContactInputObjectSchema } from './SaleUpdateWithoutContactInput.schema';
import { SaleUncheckedUpdateWithoutContactInputObjectSchema } from './SaleUncheckedUpdateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateWithoutContactInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateWithWhereUniqueWithoutContactInputObjectSchema = Schema;
