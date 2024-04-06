import { PrismaClient } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

const prisma = new PrismaClient();

class UpdateStockController {
  async handle(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const {
        name,
        category,
        quantity,
        barcode,
        description,
        imageUrl,
        costPrice,
        sellingPrice,
      } = request.body as {
        name: string;
        category: string;
        quantity: number;
        barcode: string;
        description: string;
        imageUrl: string;
        costPrice: number;
        sellingPrice: number;
      };

      if (
        !name ||
        !category ||
        quantity == null ||
        costPrice == null ||
        sellingPrice == null
      ) {
        return reply
          .code(400)
          .send({ message: 'Todos os campos são obrigatórios.' });
      }

      // Atualizar o produto com os dados fornecidos
      const updatedStock = await prisma.stock.update({
        where: { id },
        data: {
          name,
          category,
          quantity,
          barcode,
          description,
          imageUrl,
          costPrice,
          sellingPrice,
        },
      });

      reply.code(200).send({
        message: 'Produto atualizado com sucesso',
        data: updatedStock,
      });
    } catch (error) {
      console.error('Erro ao atualizar Produto:', error);
      reply.code(500).send({ message: 'Erro interno do servidor.', error });
    }
  }
}

export { UpdateStockController };
