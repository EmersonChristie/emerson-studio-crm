import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutContactInputObjectSchema } from './SaleUpdateWithoutContactInput.schema';
import { SaleUncheckedUpdateWithoutContactInputObjectSchema } from './SaleUncheckedUpdateWithoutContactInput.schema';
import { SaleCreateWithoutContactInputObjectSchema } from './SaleCreateWithoutContactInput.schema';
import { SaleUncheckedCreateWithoutContactInputObjectSchema } from './SaleUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SaleUpdateWithoutContactInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutContactInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithWhereUniqueWithoutContactInputObjectSchema = Schema;
