import { z } from 'zod';
import { SaleCreateWithoutArtworkInputObjectSchema } from './SaleCreateWithoutArtworkInput.schema';
import { SaleUncheckedCreateWithoutArtworkInputObjectSchema } from './SaleUncheckedCreateWithoutArtworkInput.schema';
import { SaleCreateOrConnectWithoutArtworkInputObjectSchema } from './SaleCreateOrConnectWithoutArtworkInput.schema';
import { SaleCreateManyArtworkInputEnvelopeObjectSchema } from './SaleCreateManyArtworkInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutArtworkInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SaleCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => SaleWhereUniqueInputObjectSchema), z.lazy(() => SaleWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const SaleUncheckedCreateNestedManyWithoutArtworkInputObjectSchema = Schema;
