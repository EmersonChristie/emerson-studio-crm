import { z } from 'zod';
import { SaleCreateWithoutContactInputObjectSchema } from './SaleCreateWithoutContactInput.schema';
import { SaleUncheckedCreateWithoutContactInputObjectSchema } from './SaleUncheckedCreateWithoutContactInput.schema';
import { SaleCreateOrConnectWithoutContactInputObjectSchema } from './SaleCreateOrConnectWithoutContactInput.schema';
import { SaleCreateManyContactInputEnvelopeObjectSchema } from './SaleCreateManyContactInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedManyWithoutContactInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutContactInputObjectSchema),
        z.lazy(() => SaleCreateWithoutContactInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutContactInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SaleCreateManyContactInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleCreateNestedManyWithoutContactInputObjectSchema = Schema;
