// Importa a classe PrismaClient do pacote @prisma/client
import { PrismaClient } from "@prisma/client";

// Cria uma instância do cliente Prisma para interagir com o banco de dados
export const prisma = new PrismaClient();
