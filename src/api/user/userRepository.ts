import { User } from '@/api/user/userModel';
import prisma from '../../../prisma/client';

// export const users: User[] = [
//   { id: 1, name: 'Alice', email: 'alice@example.com', age: 42, createdAt: new Date(), updatedAt: new Date() },
//   { id: 2, name: 'Bob', email: 'bob@example.com', age: 21, createdAt: new Date(), updatedAt: new Date() },
// ];
export const users: User[] = await prisma.user.findMany();

// create a type for registration data that is a user with no id
export type RegistrationData = Omit<User, 'id'>;

export const userRepository = {
  findAllAsync: async (): Promise<User[]> => {
    const users = await prisma.user.findMany();
    return users;
  },

  findByIdAsync: async (id: number): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  },

  createAsync: async (data: RegistrationData): Promise<User> => {
    const newUser = await prisma.user.create({ data: data });
    return newUser;
  },

  updateAsync: async (id: number, user: User): Promise<User | null> => {
    const updatedUser = await prisma.user.update({ where: { id }, data: user });
    return updatedUser;
  },

  deleteAsync: async (id: number): Promise<User | null> => {
    const deletedUser = await prisma.user.delete({ where: { id } });
    return deletedUser;
  },

  findUserByEmailAsync: async (email: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  },

  findUserByTokenAsync: async (resetToken: string): Promise<User | null> => {
    const user = await prisma.user.findFirst({ where: { resetToken } });
    return user;
  },

  updateUserTokenAsync: async (id: number, token: string, tokenExpiry: Date): Promise<User | null> => {
    const updatedUser = await prisma.user.update({ where: { id }, data: { token, tokenExpiry } });
    return updatedUser;
  },
};
