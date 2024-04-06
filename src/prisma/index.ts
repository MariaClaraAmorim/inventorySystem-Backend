// Importa a classe PrismaClient do pacote @prisma/client
import { PrismaClient } from '@prisma/client';

// Cria uma instância do cliente Prisma
const prismaClient = new PrismaClient();

// Exporta a instância do cliente Prisma como um módulo padrão para ser usada em outros arquivos
export default prismaClient;
