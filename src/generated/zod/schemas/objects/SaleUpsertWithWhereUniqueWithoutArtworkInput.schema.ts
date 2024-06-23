import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutArtworkInputObjectSchema } from './SaleUpdateWithoutArtworkInput.schema';
import { SaleUncheckedUpdateWithoutArtworkInputObjectSchema } from './SaleUncheckedUpdateWithoutArtworkInput.schema';
import { SaleCreateWithoutArtworkInputObjectSchema } from './SaleCreateWithoutArtworkInput.schema';
import { SaleUncheckedCreateWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SaleUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
