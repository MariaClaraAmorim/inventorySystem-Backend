import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para deletar um usuário do banco de dados
export async function deleteUser(userId: string) {
  try {
    // Delete o usuário do banco de dados com base no ID fornecido
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    return deletedUser;
  } catch (error) {
    // Em caso de erro, lance uma exceção para ser tratada posteriormente
    throw new Error('Erro ao deletar usuário');
  }
}
