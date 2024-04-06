import prismaClient from '../prisma/index.js';

// Interface que define a estrutura dos parâmetros necessários para excluir um Estoque
interface DeleteStockProps {
  id: string;
}

// Classe que encapsula a lógica para excluir um Estoque
class DeleteStockService {
  // Método assíncrono que executa a exclusão do Estoque com base nos parâmetros fornecidos
  async execute({ id }: DeleteStockProps) {
    // Verifica se o ID do Estoque é válido
    if (!id) {
      throw new Error('Solicitação inválida');
    }

    // Procura o Estoque com base no ID fornecido
    const foundStock = await prismaClient.stock.findFirst({
      where: {
        id: id,
      },
    });

    // Se o Estoque não for encontrado, lança um erro
    if (!foundStock) {
      throw new Error('Estoque não encontrado');
    }

    // Exclui o Estoque do banco de dados usando o Prisma
    await prismaClient.stock.delete({
      where: {
        id: foundStock.id,
      },
    });

    // Retorna uma mensagem indicando que a exclusão foi bem-sucedida
    return { message: 'Deletado com sucesso!' };
  }
}

// Exporta a classe do serviço para que ela possa ser utilizada em outros arquivos
export { DeleteStockService };
