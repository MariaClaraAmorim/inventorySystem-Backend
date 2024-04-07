import cors from '@fastify/cors';
import Fastify from 'fastify';
import replyPlugin from './plugins/passPlugin';
import { routes } from './routes';

const fastify = Fastify({ logger: true });

fastify.register(cors);

fastify.register(replyPlugin);

fastify.register(routes, { prefix: '/api' });

fastify.setErrorHandler((error, _, reply) => {
  reply.code(400).send({ message: error.message });
});

export const app = fastify;
