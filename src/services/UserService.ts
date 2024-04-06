import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export interface User {
  id: string;
  username: string;
  password: string;
  role: Role;
}

export async function createUser(
  username: string,
  password: string,
  role: Role | undefined
): Promise<User> {
  try {
    // Criptografar a senha antes de armazená-la no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10); // 10 é o custo do hash (quanto maior, mais seguro, mas mais lento)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role,
      },
    });

    return {
      id: user.id,
      username: user.username,
      password: user.password, 
      role: user.role,
    };
  } catch (error) {
    throw new Error("Erro ao criar usuário: " + error);
  }
}
