import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateOrConnectWithoutContactsInput> = z
  .object({
    where: z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema),
      z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema = Schema;
