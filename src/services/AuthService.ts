import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function authenticateUser(username: string, password: string) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Senha invalida");
  }

  return user;
}
