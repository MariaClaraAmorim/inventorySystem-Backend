import { FastifyReply, FastifyRequest } from 'fastify';
import { deleteUser } from '../services/DeleteUserService.js';

// Interface para representar os parâmetros da solicitação
interface DeleteUserParams {
  userId: string;
}

// Controlador para lidar com a solicitação de exclusão de usuário
export async function deleteUserHandler(
  request: FastifyRequest<{ Params: DeleteUserParams }>,
  reply: FastifyReply
) {
  try {
    const { userId } = request.params;

    // Chama o serviço para deletar o usuário com o ID fornecido
    const deletedUser = await deleteUser(userId);

    // Envie a resposta com o usuário deletado
    reply.send(deletedUser);
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    reply.status(500).send({ message: error });
  }
}
