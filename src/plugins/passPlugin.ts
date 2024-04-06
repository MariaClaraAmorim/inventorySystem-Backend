import { FastifyInstance, FastifyReply } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

// Declaração de módulo para adicionar o decorador 'pass' ao Fastify Reply
declare module 'fastify' {
  interface FastifyReply {
    pass(...args: any[]): FastifyReply;
  }
}

async function passPlugin(fastify: FastifyInstance) {
  fastify.decorateReply('pass', function (this: FastifyReply, ...args: any[]) {
    return this.send(...args);
  });
}

export default fastifyPlugin(passPlugin);
