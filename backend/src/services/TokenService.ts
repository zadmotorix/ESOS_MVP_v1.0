import jwt from 'jsonwebtoken';

export class TokenService {
  generateAccessToken(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
  }

  generateRefreshToken(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
  }

  verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
  }
}
