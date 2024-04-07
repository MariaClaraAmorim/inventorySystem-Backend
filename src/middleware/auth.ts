/* import { FastifyRequest, FastifyReply } from "fastify";

// Defina uma interface estendida que inclui a propriedade 'user'
interface AuthenticatedRequest extends FastifyRequest {
  user?: { role: string }; // Defina o tipo de 'user' conforme necessário
}

// Middleware para verificar se o usuário é um administrador
export const isAdmin = async (request: AuthenticatedRequest, reply: FastifyReply) => {
  const user = request.user;

  if (!user || user.role !== 'ADMIN') {
    reply.status(403).send({ message: 'Acesso negado. Esta rota requer permissão de administrador.' });
    return;
  }

  // Se o usuário for um administrador, podemos prosseguir
  return;
};

// Middleware para verificar se o usuário está autenticado
export const isAuthenticated = async (request: AuthenticatedRequest, reply: FastifyReply) => {
  const user = request.user;

  if (!user) {
    reply.status(401).send({ message: 'Não autenticado. Faça login para acessar esta rota.' });
    return;
  }

  // Se o usuário estiver autenticado, podemos prosseguir
  return;
};
 */