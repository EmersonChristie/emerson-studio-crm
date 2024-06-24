import { Contact } from '@/api/contact/contactModel';
import prisma from '../../../prisma/client';

export const contacts: Contact[] = await prisma.contact.findMany();

export const contactRepository = {
  findAllAsync: async (): Promise<Contact[]> => {
    return await prisma.contact.findMany();
  },

  findByIdAsync: async (id: number): Promise<Contact | null> => {
    return await prisma.contact.findUnique({ where: { id } });
  },
};
