// Importa as definições de tipos FastifyRequest e FastifyReply do módulo "fastify"
import { FastifyReply, FastifyRequest } from 'fastify';

// Importa a classe DeleteStockService do arquivo de serviço correspondente
import { DeleteStockService } from '../services/DeleteStockService.js';

// Classe responsável por lidar com as requisições para excluir um estoque
class DeleteStockController {
  // Método assíncrono que lida com a requisição de exclusão de estoque
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Extrai o ID do estoque a ser excluído dos parâmetros da requisição
    const { id } = request.query as { id: string };

    // Instancia o serviço de exclusão de estoque
    const stockService = new DeleteStockService();

    // Executa o serviço de exclusão de estoque com o ID fornecido e aguarda o resultado
    const stock = await stockService.execute({ id });

    // Envia a resposta ao estoque com o resultado da exclusão
    reply.send(stock);
  }
}

// Exporta a classe do controlador de exclusão de estoque para uso em outros arquivos
export { DeleteStockController };
