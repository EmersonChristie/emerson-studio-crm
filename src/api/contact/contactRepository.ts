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

  createAsync: async (contact: Contact): Promise<Contact> => {
    return await prisma.contact.create({ data: contact });
  },

  updateAsync: async (id: number, contact: Contact): Promise<Contact | null> => {
    return await prisma.contact.update({ where: { id }, data: contact });
  },

  deleteAsync: async (id: number): Promise<Contact | null> => {
    return await prisma.contact.delete({ where: { id } });
  },

  deleteAllAsync: async (): Promise<void> => {
    await prisma.contact.deleteMany();
  },
};
