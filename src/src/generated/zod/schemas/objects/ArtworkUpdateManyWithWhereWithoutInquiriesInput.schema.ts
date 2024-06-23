import { z } from 'zod';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';
import { ArtworkUpdateManyMutationInputObjectSchema } from './ArtworkUpdateManyMutationInput.schema';
import { ArtworkUncheckedUpdateManyWithoutArtworksInputObjectSchema } from './ArtworkUncheckedUpdateManyWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUpdateManyWithWhereWithoutInquiriesInput> = z
  .object({
    where: z.lazy(() => ArtworkScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtworkUncheckedUpdateManyWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkUpdateManyWithWhereWithoutInquiriesInputObjectSchema = Schema;
