import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithoutListsInputObjectSchema } from './ArtworkUpdateWithoutListsInput.schema';
import { ArtworkUncheckedUpdateWithoutListsInputObjectSchema } from './ArtworkUncheckedUpdateWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateWithWhereUniqueWithoutListsInput> = z
  .object({
    where: z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateWithoutListsInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateWithWhereUniqueWithoutListsInputObjectSchema = Schema;
