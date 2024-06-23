import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutContactInputObjectSchema } from './SaleCreateWithoutContactInput.schema';
import { SaleUncheckedCreateWithoutContactInputObjectSchema } from './SaleUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutContactInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutContactInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutContactInputObjectSchema = Schema;
