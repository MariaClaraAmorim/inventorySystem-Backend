import { prisma } from '../utils/prisma.js';

// Função para listar todos os usuários do banco de dados
export async function listUsers() {
  try {
    // Recupere todos os usuários do banco de dados
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    // Em caso de erro, lance uma exceção para ser tratada posteriormente
    throw new Error('Erro ao listar usuários');
  }
}
