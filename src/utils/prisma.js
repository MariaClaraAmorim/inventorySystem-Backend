"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// Importa a classe PrismaClient do pacote @prisma/client
var client_1 = require("@prisma/client");
// Cria uma instância do cliente Prisma para interagir com o banco de dados
exports.prisma = new client_1.PrismaClient();
