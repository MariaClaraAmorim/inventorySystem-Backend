import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define um tipo para os tamanhos permitidos
type AllowedSizes = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'G3';

interface CreateStockRequest {
  name: string;
  category: string;
  quantity: number;
  barcode: string;
  description: string;
  imageUrl: string;
  costPrice: number;
  sellingPrice: number;
  color?: string;
  size?: AllowedSizes;
}

class CreateStockController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const {
        name,
        category,
        quantity,
        barcode,
        description,
        imageUrl,
        costPrice,
        sellingPrice,
        color,
        size,
      } = request.body as CreateStockRequest; // Altera o tipo da desestruturação

      if (!name || !category || quantity == null || costPrice == null || sellingPrice == null) {
        return reply.code(400).send({ message: "Todos os campos são obrigatórios." });
      }

      const status = quantity > 0;

      // Cria o produto no banco de dados
      const stock = await prisma.stock.create({
        data: {
          name,
          category,
          quantity,
          barcode,
          description,
          status,
          imageUrl,
          costPrice,
          sellingPrice,
          color,
          size,
        },
      });

      const responseData = {
        id: stock.id,
        name: stock.name,
        category: stock.category,
        quantity: stock.quantity,
        barcode: stock.barcode,
        status: stock.status,
        imageUrl: stock.imageUrl,
        costPrice: stock.costPrice,
        sellingPrice: stock.sellingPrice,
        color: stock.color,
        size: stock.size,
      };

      reply.code(201).send({ message: "Produto criado com sucesso", data: responseData });
    } catch (error) {
      console.error("Erro ao criar Produto:", error);
      reply.code(500).send({ message: "Erro interno do servidor.", error });
    }
  }
}

export { CreateStockController };
