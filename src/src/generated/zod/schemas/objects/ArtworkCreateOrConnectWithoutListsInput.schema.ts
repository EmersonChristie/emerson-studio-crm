import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkCreateWithoutListsInputObjectSchema } from './ArtworkCreateWithoutListsInput.schema';
import { ArtworkUncheckedCreateWithoutListsInputObjectSchema } from './ArtworkUncheckedCreateWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCreateOrConnectWithoutListsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCreateOrConnectWithoutListsInputObjectSchema = Schema;
