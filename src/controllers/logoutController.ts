import { FastifyReply, FastifyRequest } from 'fastify';
import { logout } from '../services/logoutService.js';

export async function logoutUser(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  try {
    // Chama a função de logout do serviço
    await logout();

    // Responde ao cliente com uma mensagem de logout bem-sucedido
    reply.status(200).send({ message: 'Logout bem-sucedido' });
  } catch (error) {
    console.error('Erro durante o logout:', error);
    reply.status(500).send({ message: 'Erro interno do servidor' });
  }
}
