import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProductCountByCategoryHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const productCountByCategory = await prisma.stock.groupBy({
      by: ["category"],
      _count: true, // Definir _count como true para obter a contagem
    });

    const formattedData = productCountByCategory.map((item: any) => ({
      category: item.category,
      count: item._count, // A contagem é diretamente acessível aqui
    }));

    reply.code(200).send(formattedData);
  } catch (error) {
    console.error("Erro ao buscar contagem de produtos por categoria:", error);
    reply.code(500).send({ message: "Erro interno do servidor." });
  }
}

export { getProductCountByCategoryHandler };
