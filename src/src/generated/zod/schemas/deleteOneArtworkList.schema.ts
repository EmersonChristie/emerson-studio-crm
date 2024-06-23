import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';

export const ArtworkListDeleteOneSchema = z.object({ where: ArtworkListWhereUniqueInputObjectSchema });
