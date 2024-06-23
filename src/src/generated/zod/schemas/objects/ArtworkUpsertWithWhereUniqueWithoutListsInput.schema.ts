import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutListsInputObjectSchema } from './ArtworkUpdateWithoutListsInput.schema';
import { ArtworkUncheckedUpdateWithoutListsInputObjectSchema } from './ArtworkUncheckedUpdateWithoutListsInput.schema';
import { ArtworkCreateWithoutListsInputObjectSchema } from './ArtworkCreateWithoutListsInput.schema';
import { ArtworkUncheckedCreateWithoutListsInputObjectSchema } from './ArtworkUncheckedCreateWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpsertWithWhereUniqueWithoutListsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkUpdateWithoutListsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutListsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpsertWithWhereUniqueWithoutListsInputObjectSchema = Schema;
