import { z } from 'zod';
import { ArtworkCreateWithoutListsInputObjectSchema } from './ArtworkCreateWithoutListsInput.schema';
import { ArtworkUncheckedCreateWithoutListsInputObjectSchema } from './ArtworkUncheckedCreateWithoutListsInput.schema';
import { ArtworkCreateOrConnectWithoutListsInputObjectSchema } from './ArtworkCreateOrConnectWithoutListsInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedCreateNestedManyWithoutListsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutListsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUncheckedCreateNestedManyWithoutListsInputObjectSchema = Schema;
