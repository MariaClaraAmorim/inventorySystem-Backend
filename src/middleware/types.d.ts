import type { Role } from '../models/User.js';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      id: number;
      username: string;
      role: Role;
    };
  }
}
