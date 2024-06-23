import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutContactsInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInputObjectSchema = Schema;
