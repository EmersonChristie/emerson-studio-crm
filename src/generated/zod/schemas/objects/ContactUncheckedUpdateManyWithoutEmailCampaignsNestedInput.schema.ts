import { z } from 'zod';
import { ContactCreateWithoutEmailCampaignsInputObjectSchema } from './ContactCreateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedCreateWithoutEmailCampaignsInput.schema';
import { ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema } from './ContactCreateOrConnectWithoutEmailCampaignsInput.schema';
import { ContactUpsertWithWhereUniqueWithoutEmailCampaignsInputObjectSchema } from './ContactUpsertWithWhereUniqueWithoutEmailCampaignsInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithWhereUniqueWithoutEmailCampaignsInputObjectSchema } from './ContactUpdateWithWhereUniqueWithoutEmailCampaignsInput.schema';
import { ContactUpdateManyWithWhereWithoutEmailCampaignsInputObjectSchema } from './ContactUpdateManyWithWhereWithoutEmailCampaignsInput.schema';
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUncheckedUpdateManyWithoutEmailCampaignsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema).array(),
        z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactUpsertWithWhereUniqueWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactUpdateWithWhereUniqueWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ContactUpdateManyWithWhereWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactUpdateManyWithWhereWithoutEmailCampaignsInputObjectSchema).array(),
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

export const ContactUncheckedUpdateManyWithoutEmailCampaignsNestedInputObjectSchema = Schema;
