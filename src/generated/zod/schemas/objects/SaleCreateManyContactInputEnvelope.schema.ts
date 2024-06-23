import { z } from 'zod';
import { SaleCreateManyContactInputObjectSchema } from './SaleCreateManyContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyContactInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyContactInputObjectSchema),
      z.lazy(() => SaleCreateManyContactInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyContactInputEnvelopeObjectSchema = Schema;
