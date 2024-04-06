import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getProductCountHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const productCount = await prisma.stock.count();
    reply.code(200).send({ productCount });
  } catch (error) {
    console.error('Erro ao buscar a contagem de produtos:', error);
    reply.code(500).send({ message: 'Erro interno do servidor.' });
  }
}

async function getUserCountHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userCount = await prisma.user.count();
    reply.code(200).send({ userCount });
  } catch (error) {
    console.error('Erro ao buscar a contagem de usuários:', error);
    reply.code(500).send({ message: 'Erro interno do servidor.' });
  }
}

export { getProductCountHandler, getUserCountHandler };
