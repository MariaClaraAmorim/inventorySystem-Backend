"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a classe PrismaClient do pacote @prisma/client
var client_1 = require("@prisma/client");
// Cria uma instância do cliente Prisma
var prismaClient = new client_1.PrismaClient();
// Exporta a instância do cliente Prisma como um módulo padrão para ser usada em outros arquivos
exports.default = prismaClient;
