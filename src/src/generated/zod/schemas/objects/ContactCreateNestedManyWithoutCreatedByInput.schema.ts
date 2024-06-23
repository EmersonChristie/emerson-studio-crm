import { z } from 'zod';
import { ContactCreateWithoutCreatedByInputObjectSchema } from './ContactCreateWithoutCreatedByInput.schema';
import { ContactUncheckedCreateWithoutCreatedByInputObjectSchema } from './ContactUncheckedCreateWithoutCreatedByInput.schema';
import { ContactCreateOrConnectWithoutCreatedByInputObjectSchema } from './ContactCreateOrConnectWithoutCreatedByInput.schema';
import { ContactCreateManyCreatedByInputEnvelopeObjectSchema } from './ContactCreateManyCreatedByInputEnvelope.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ContactUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ContactCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ContactCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ContactCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
