import { Template } from '@/api/template/templateModel';
import prisma from '../../../prisma/client';

export const templates: Template[] = await prisma.template.findMany();

export const templateRepository = {
  findAllAsync: async (): Promise<Template[]> => {
    return await prisma.template.findMany();
  },

  findByIdAsync: async (id: number): Promise<Template | null> => {
    return await prisma.template.findUnique({ where: { id } });
  },
};
