import bcrypt from 'bcrypt';
import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import { findUserByUsername } from '../services/findUserByUsername.js';

const SECRET_KEY = process.env.SECRET_KEY || 'sua_chave_secreta';
const JWT_EXPIRATION_TIME = '1h';
const HTTP_UNAUTHORIZED = 401;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const generateToken = (userId: string, isAdmin: boolean): string => {
  return jwt.sign({ userId, isAdmin }, SECRET_KEY, {
    expiresIn: JWT_EXPIRATION_TIME,
  });
};

export class LoginUserController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { username, password } = request.body as {
      username: string;
      password: string;
    };

    try {
      if (!username || !password) {
        reply
          .status(HTTP_UNAUTHORIZED)
          .send({ success: false, message: 'Credenciais de login inválidas' });
        return;
      }

      const user = await findUserByUsername(username);

      if (!user) {
        reply
          .status(HTTP_UNAUTHORIZED)
          .send({ success: false, message: 'Usuário não encontrado' });
        return;
      }

      // Verificar se a função findUserByUsername retorna um objeto do tipo User
      if (
        !(
          'id' in user &&
          'username' in user &&
          'password' in user &&
          'role' in user
        )
      ) {
        reply
          .status(HTTP_INTERNAL_SERVER_ERROR)
          .send({
            success: false,
            message: 'Usuário retornado incorretamente',
          });
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        reply
          .status(HTTP_UNAUTHORIZED)
          .send({ success: false, message: 'Senha incorreta' });
        return;
      }

      const isAdmin = user.role === 'ADMIN';
      const token = generateToken(user.id, isAdmin);

      reply.send({ success: true, user: { ...user, isAdmin }, token });
    } catch (error: any) {
      reply
        .status(HTTP_INTERNAL_SERVER_ERROR)
        .send({ success: false, message: error.message });
    }
  }
}
