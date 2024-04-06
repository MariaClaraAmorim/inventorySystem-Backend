// Importações necessárias do Fastify para tipos e funcionalidades
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

// Importações dos controladores para manipular as requisições
import { countLowStockProducts } from './controllers/CountStockLow.js';
import { getTotalSellingValueHandler } from './controllers/CountValueController.js';
import { CreateStockController } from './controllers/CreateStockController.js';
import { DeleteStockController } from './controllers/DeleteStockController.js';
import { deleteUserHandler } from './controllers/DeleteUserController.js';
import { ListStockController } from './controllers/ListStockController.js';
import { LoginUserController } from './controllers/LoginUserController.js';
import { RegisterUserController } from './controllers/RegisterUserController.js';
import { getUsers } from './controllers/UsersListController.js';
import {
  getProductCountHandler,
  getUserCountHandler,
} from './controllers/countHandlers.js';
import { getProductCountByCategoryHandler } from './controllers/getProductCountByCategoryHandler.js';
import { logoutUser } from './controllers/logoutController.js';
import { manageStock } from './controllers/manageStock.js';
import { CurrentStockReportController } from './controllers/relatorios/CurrentStockReportController.js';
import { UpdateStockController } from './controllers/updateStockController.js';
import { isAdmin, isAuthenticated } from './middleware/auth.js';

// Função responsável por definir as rotas da aplicação
export async function routes(fastify: FastifyInstance) {
  // Rota de teste simples para verificar se o servidor está online
  fastify.get(
    '/teste',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true }; // Retorna um objeto indicando que o servidor está online
    }
  );

  const currentStockReportController = new CurrentStockReportController();

  fastify.get('/current-stock-report', async (request, reply) => {
    // Chame o método `handle` do controlador e retorne sua resposta
    return currentStockReportController.handle(request, reply);
  });

  // Rota de login
  fastify.post(
    '/login',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().handle(request, reply);
    }
  );

  // Rota para registrar um novo usuario
  fastify.post('/register', async (request, reply) => {
    return new RegisterUserController().handle(request, reply);
  });

  // Rota para listar usuários
  fastify.get('/users', getUsers);

  // Rota para deletar um usuário
  fastify.delete('/delete-users/:userId', deleteUserHandler);

  // Exemplo de rota que requer autenticação
  fastify.get(
    '/protected-route',
    { preHandler: isAuthenticated },
    async (request, reply) => {
      reply.send({
        message: 'Você está autenticado e tem acesso a esta rota.',
      });
    }
  );

  // Exemplo de rota que requer permissão de administrador
  fastify.get(
    '/admin-route',
    { preHandler: isAdmin },
    async (request, reply) => {
      reply.send({
        message: 'Você é um administrador e tem acesso a esta rota.',
      });
    }
  );

  /*  
   // Rota para o administrador
    fastify.get(
      "/admin",
      { preHandler: authorize("ADMIN") },
      async (request, reply) => {
        reply.send({
          message: "Esta rota é acessível apenas para administradores",
        });
      }
    );
  
    // Rota para o usuário comum
    fastify.get(
      "/user",
      { preHandler: authorize("USER") },
      async (request, reply) => {
        return { message: "Esta é uma rota privada do usuário" };
      }
    ); 
    */

  // Rota para logout
  fastify.post(
    '/logout',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Chama a função do controlador de logout
      await logoutUser(request, reply);
    }
  );

  // Rota para registrar um novo produto
  fastify.post(
    '/register-stock',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Cria uma instância do controlador de criação de produto e chama o método handle para lidar com a requisição
      return new CreateStockController().handle(request, reply);
    }
  );

  const updateStockController = new UpdateStockController();

  // Rota para atualizar um produto de estoque
  fastify.put<{ Params: { id: string } }>(
    '/update-stock/:id',
    async (request, reply) => {
      const { id } = request.params; // Extrair o parâmetro id da solicitação
      await updateStockController.handle(request, reply); // Passar o id para o controlador
    }
  );

  // Rota para listar produtos
  fastify.get(
    '/list-stock',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Cria uma instância do controlador de listagem de produtos e chama o método handle para lidar com a requisição
      return new ListStockController().handle(request, reply);
    }
  );

  fastify.get('/products/count', getProductCountHandler);
  fastify.get('/users/count', getUserCountHandler);

  fastify.get('/products/count-by-category', getProductCountByCategoryHandler);

  fastify.get('/total-selling-value', getTotalSellingValueHandler);

  fastify.get('/stock/low-count', countLowStockProducts);

  fastify.post('/manage-stock', manageStock);

  // Rota para excluir um produto
  fastify.delete(
    '/delete-stock',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Cria uma instância do controlador de exclusão de produto e chama o método handle para lidar com a requisição
      return new DeleteStockController().handle(request, reply);
    }
  );
}
