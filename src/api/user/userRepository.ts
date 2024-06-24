import { User } from '@/api/user/userModel';
import prisma from '../../../prisma/client';

// export const users: User[] = [
//   { id: 1, name: 'Alice', email: 'alice@example.com', age: 42, createdAt: new Date(), updatedAt: new Date() },
//   { id: 2, name: 'Bob', email: 'bob@example.com', age: 21, createdAt: new Date(), updatedAt: new Date() },
// ];
export const users: User[] = await prisma.user.findMany();

export const userRepository = {
  findAllAsync: async (): Promise<User[]> => {
    const users = await prisma.user.findMany();
    return users;
  },

  findByIdAsync: async (id: number): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  },
};
