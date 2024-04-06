import * as dotenv from 'dotenv';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { app } from './app.js';
dotenv.config();

// Other imports

export default async (req: FastifyRequest, res: FastifyReply) => {
  try {
    await app.ready();
    app.server.emit('request', req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
