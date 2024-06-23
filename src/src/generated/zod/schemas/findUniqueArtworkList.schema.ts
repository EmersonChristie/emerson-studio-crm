import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';

export const ArtworkListFindUniqueSchema = z.object({ where: ArtworkListWhereUniqueInputObjectSchema });
