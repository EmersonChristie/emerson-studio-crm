import { z } from 'zod';
import { ImageCreateWithoutArtworkInputObjectSchema } from './ImageCreateWithoutArtworkInput.schema';
import { ImageUncheckedCreateWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkInput.schema';
import { ImageCreateOrConnectWithoutArtworkInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkInput.schema';
import { ImageCreateManyArtworkInputEnvelopeObjectSchema } from './ImageCreateManyArtworkInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutArtworkInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ImageCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ImageCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const ImageUncheckedCreateNestedManyWithoutArtworkInputObjectSchema = Schema;
