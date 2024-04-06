// Importa o objeto prismaClient que será utilizado para interagir com o banco de dados

import prismaClient from '../prisma/index.js';

// Classe responsável por executar a lógica para listar estoque
class ListStockService {
  // Método assíncrono que executa a listagem de estoque
  async execute() {
    // Consulta todos os estoque no banco de dados usando o Prisma
    const stocks = await prismaClient.stock.findMany();

    // Retorna a lista de estoque
    return stocks;
  }
}

// Exporta a classe do serviço de listagem de estoque para uso em outros arquivos
export { ListStockService };
