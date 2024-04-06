// Importa as definições de tipos FastifyRequest e FastifyReply do módulo "fastify"
import { FastifyReply, FastifyRequest } from 'fastify';

// Importa a classe ListStockService do arquivo de serviço correspondente
import { ListStockService } from '../services/ListStockService.js';

// Classe responsável por lidar com as requisições para listar estoque
class ListStockController {
  // Método assíncrono que lida com a requisição de listagem de estoque
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Instancia o serviço de listagem de estoque
    const listStockService = new ListStockService();

    // Executa o serviço de listagem de estoque e aguarda o resultado
    const stock = await listStockService.execute();

    // Envia a resposta ao cliente com a lista de estoque
    reply.send(stock);
  }
}

// Exporta a classe do controlador de listagem de estoque para uso em outros arquivos
export { ListStockController };
