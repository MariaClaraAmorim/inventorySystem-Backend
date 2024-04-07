/* import { app } from './app.js';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3333';
const PORT = Number(process.env.PORT) || 3333;

// Função assíncrona para iniciar o servidor
const start = async () => {
  try {
    await app.listen({ port: PORT });
    console.log(`Server running at ${BASE_URL}`);
  } catch (err) {
    // Em caso de erro ao iniciar o servidor, encerra o processo
    console.error(err);
    process.exit(1);
  }
};

// Inicia o servidor chamando a função start
start();
 */


// Importa o middleware de CORS do Fastify para lidar com as políticas de CORS
import cors from "@fastify/cors";

// Importa o módulo Fastify para criar o servidor web e registrar rotas
import Fastify from "fastify";
// Importa as definições de rotas da aplicação
import { routes } from "./routes";

import replyPlugin from "./plugins/passPlugin";
// Define o baseURL do servidor
const baseURL = "http://localhost:3333";

const port = process.env.PORT || 3333;

// Cria uma instância do aplicativo Fastify, habilitando o registro de logs
const app = Fastify({ logger: true });

// Configura um manipulador de erros para responder com status 400 e mensagem de erro em caso de exceção
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

// Função assíncrona para iniciar o servidor
const start = async () => {
  // Registra o middleware de CORS para lidar com as políticas de CORS
  await app.register(cors);

  app.register(replyPlugin);

  // Registra as rotas da aplicação
  await app.register(routes, { prefix: "/api" }); // Prefixa todas as rotas com '/api'

  try {
    // Inicia o servidor na porta 3333
    await app.listen({ port: 3333 });
    console.log(`Server running at ${baseURL}`);
  } catch (err) {
    // Em caso de erro ao iniciar o servidor, encerra o processo
    console.error(err);
    process.exit(1);
  }
};

// Inicia o servidor chamando a função start
start();
