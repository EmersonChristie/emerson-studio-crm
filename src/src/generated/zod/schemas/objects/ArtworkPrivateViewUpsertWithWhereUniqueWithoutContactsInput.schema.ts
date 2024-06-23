import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUpdateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedUpdateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedUpdateWithoutContactsInput.schema';
import { ArtworkPrivateViewCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtworkPrivateViewUpdateWithoutContactsInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedUpdateWithoutContactsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInputObjectSchema = Schema;
