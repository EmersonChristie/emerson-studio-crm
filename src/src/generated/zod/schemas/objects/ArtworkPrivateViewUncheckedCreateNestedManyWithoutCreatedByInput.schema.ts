import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutCreatedByInput.schema';
import { ArtworkPrivateViewCreateManyCreatedByInputEnvelopeObjectSchema } from './ArtworkPrivateViewCreateManyCreatedByInputEnvelope.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkPrivateViewCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
