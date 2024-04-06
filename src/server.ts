import { app } from './app.js';

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
