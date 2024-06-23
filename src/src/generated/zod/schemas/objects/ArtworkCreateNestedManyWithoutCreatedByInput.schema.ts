import { z } from 'zod';
import { ArtworkCreateWithoutCreatedByInputObjectSchema } from './ArtworkCreateWithoutCreatedByInput.schema';
import { ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedCreateWithoutCreatedByInput.schema';
import { ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema } from './ArtworkCreateOrConnectWithoutCreatedByInput.schema';
import { ArtworkCreateManyCreatedByInputEnvelopeObjectSchema } from './ArtworkCreateManyCreatedByInputEnvelope.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
