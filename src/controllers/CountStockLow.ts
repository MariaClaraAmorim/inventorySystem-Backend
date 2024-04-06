import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function countLowStockProducts(request: FastifyRequest, reply: FastifyReply) {
    try {
        // Define o limite mínimo para considerar um produto como estoque baixo
        const lowStockThreshold = 5;

        // Consulta o banco de dados para contar quantos produtos têm quantidade menor que o limite mínimo
        const lowStockProductCount = await prisma.stock.count({
            where: {
                quantity: { lt: lowStockThreshold }
            }
        });

        reply.code(200).send({ lowStockProductCount });
    } catch (error) {
        console.error('Erro ao contar produtos com estoque baixo:', error);
        reply.code(500).send({ message: 'Erro interno do servidor.' });
    }
}

export { countLowStockProducts };
