import { z, ZodType, ZodRawShape } from 'zod';

type PrismaModel = { [key: string]: any };

export const prismaTypeToZod = (prismaModel: PrismaModel): ZodRawShape => {
  const schema: ZodRawShape = {};

  Object.keys(prismaModel).forEach((key) => {
    const value = prismaModel[key];

    if (typeof value === 'string') {
      schema[key] = z.string();
    } else if (typeof value === 'number') {
      schema[key] = z.number();
    } else if (typeof value === 'boolean') {
      schema[key] = z.boolean();
    } else if (value instanceof Date) {
      schema[key] = z.date();
    } else if (value === null) {
      schema[key] = z.null();
    } else if (Array.isArray(value)) {
      schema[key] = z.array(z.any()); // For simplicity, use z.any() for arrays
    } else if (typeof value === 'object') {
      schema[key] = z.object(prismaTypeToZod(value));
    } else {
      schema[key] = z.any(); // Fallback to z.any() for unknown types
    }
  });

  return schema;
};
