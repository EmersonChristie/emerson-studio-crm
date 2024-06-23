import { z } from 'zod';
import { ArtworkListScalarWhereInputObjectSchema } from './ArtworkListScalarWhereInput.schema';
import { ArtworkListUpdateManyMutationInputObjectSchema } from './ArtworkListUpdateManyMutationInput.schema';
import { ArtworkListUncheckedUpdateManyWithoutListsInputObjectSchema } from './ArtworkListUncheckedUpdateManyWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListUpdateManyWithWhereWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkListScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkListUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtworkListUncheckedUpdateManyWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkListUpdateManyWithWhereWithoutArtworksInputObjectSchema = Schema;
