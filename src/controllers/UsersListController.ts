// users.controller.ts

import { FastifyReply, FastifyRequest } from 'fastify';
import { listUsers } from '../services/UsersListService.js';

// Controlador para lidar com a solicitação de listagem de usuários
export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Chame o serviço para listar usuários
    const users = await listUsers();

    // Envie a lista de usuários como resposta
    reply.send(users);
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    reply.status(500).send({ message: error });
  }
}
