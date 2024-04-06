import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function manageStock(req: FastifyRequest, reply: FastifyReply) {
  const { productName, quantity, transactionType } = req.body as {
    productName: number;
    quantity: number;
    transactionType: 'entrada' | 'saida';
  };

  try {

    const productNameString = String(productName);

    // Verifica se o produto existe
    const existingProduct = await prisma.stock.findUnique({
      where: {
        id: productNameString
      }
    });

    if (!existingProduct) {
      return reply.status(404).send({ message: 'Produto não encontrado.' });
    }

    // Inicializando updatedQuantity com 0
    let updatedQuantity = 0;

    // Verifica se existingProduct.quantity não é nulo
    if (existingProduct.quantity !== null) {
      updatedQuantity = existingProduct.quantity;
    }

    if (transactionType === 'entrada') {
      updatedQuantity += quantity;
    } else if (transactionType === 'saida') {
      // Verifica se existingProduct.quantity não é nulo
      if (existingProduct.quantity !== null && existingProduct.quantity < quantity) {
        return reply.status(400).send({ message: 'Quantidade insuficiente em estoque.' });
      }
      updatedQuantity -= quantity;
    } else {
      return reply.status(400).send({ message: 'Tipo de transação inválido.' });
    }

    // Atualiza a quantidade do produto no banco de dados
    const updatedProduct = await prisma.stock.update({
      where: {
        id: productNameString
      },
      data: {
        quantity: updatedQuantity
      }
    });

    reply.status(200).send({ message: 'Transação de estoque realizada com sucesso.', updatedProduct });
  } catch (error) {
    console.error('Erro ao processar transação de estoque:', error);
    reply.status(500).send({ message: 'Erro interno do servidor.' });
  }
}

export { manageStock };
