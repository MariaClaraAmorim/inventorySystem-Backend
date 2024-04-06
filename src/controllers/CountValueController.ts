import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getTotalSellingValueHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Busca todos os produtos do estoque
    const products = await prisma.stock.findMany();

    // Calcula o valor total de venda somando o preço de venda de todos os produtos
    const totalSellingValue = products.reduce((total, product) => {

      const quantity = product.quantity ?? 0;
      const sellingPrice = product.sellingPrice ?? 0;
      return total + (quantity * sellingPrice);
    }, 0);

    reply.code(200).send({ totalSellingValue });
  } catch (error) {
    console.error('Erro ao calcular o valor total de venda dos produtos:', error);
    reply.code(500).send({ message: 'Erro interno do servidor.' });
  }
}

export { getTotalSellingValueHandler };
