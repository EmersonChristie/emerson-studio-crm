import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';

export const ArtworkPrivateViewFindUniqueSchema = z.object({ where: ArtworkPrivateViewWhereUniqueInputObjectSchema });
