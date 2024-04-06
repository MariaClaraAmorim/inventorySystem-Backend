import { PrismaClient } from '@prisma/client';
import { User } from './UserService.js';

const prisma = new PrismaClient();

export async function findUserByUsername(
  username: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    password: user.password,
    role: user.role,
  };
}
