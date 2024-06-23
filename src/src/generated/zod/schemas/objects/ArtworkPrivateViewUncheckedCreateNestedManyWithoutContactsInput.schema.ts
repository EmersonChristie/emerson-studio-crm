import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutContactsInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateNestedManyWithoutContactsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema).array(),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateNestedManyWithoutContactsInputObjectSchema = Schema;
