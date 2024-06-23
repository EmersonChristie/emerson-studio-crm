import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';

export const ArtworkFindUniqueSchema = z.object({ where: ArtworkWhereUniqueInputObjectSchema });
