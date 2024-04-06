import jwt from 'jsonwebtoken';

interface User {
  id: string;
  username: string;
  role: string;
}

const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  if (!process.env.SECRET) {
    throw new Error('Secret is not defined');
  }

  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });

  return token;
};

export { generateToken };
