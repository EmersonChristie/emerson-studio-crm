import { z } from 'zod';
import { ContactCreateWithoutCreatedByInputObjectSchema } from './ContactCreateWithoutCreatedByInput.schema';
import { ContactUncheckedCreateWithoutCreatedByInputObjectSchema } from './ContactUncheckedCreateWithoutCreatedByInput.schema';
import { ContactCreateOrConnectWithoutCreatedByInputObjectSchema } from './ContactCreateOrConnectWithoutCreatedByInput.schema';
import { ContactUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ContactUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ContactCreateManyCreatedByInputEnvelopeObjectSchema } from './ContactCreateManyCreatedByInputEnvelope.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ContactUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ContactUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ContactUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateManyWithoutCreatedByNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ContactCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ContactUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => ContactUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ContactScalarWhereInputObjectSchema),
        z.lazy(() => ContactScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ContactUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
