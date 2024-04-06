import { FastifyRequest, FastifyReply } from "fastify";

type Role = "ADMIN" | "USER";
export function authorize(role: Role) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    // Verifica se o objeto de usuário está definido e se possui a propriedade de papel (role)
    if (!request.user || !request.user.role) {
      reply.code(401).send({ message: "Usuário não autenticado" });
      return;
    }

    // Verifica a lógica de autorização com base no papel do usuário
    const userRole = request.user.role;
    if (userRole !== role) {
      reply.code(403).send({ message: "Acesso negado" });
    } else {
      // Se o usuário tiver permissão, passa para o próximo middleware ou manipulador
      reply.pass();
    }
  };
}
