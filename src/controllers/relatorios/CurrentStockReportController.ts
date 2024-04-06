import { FastifyReply, FastifyRequest } from 'fastify';
import { CurrentStockReportService } from '../../services/relatorios/CurrentStockReportService.js';

class CurrentStockReportController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const reportService = new CurrentStockReportService();
      const report = await reportService.generateReport();

      // Enviar a resposta apenas uma vez
      reply.send({
        success: true,
        report: report,
      });
    } catch (error) {
      console.error('Erro ao gerar relatório de estoque atual:', error);
      reply.code(500).send({
        success: false,
        message: 'Erro interno do servidor ao gerar relatório.',
      });
    }
  }
}

export { CurrentStockReportController };
