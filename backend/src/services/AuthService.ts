import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthService{
  async hashPassword(password:string){
    return bcrypt.hash(password,10);
  }
  async verifyPassword(password:string,hash:string){
    return bcrypt.compare(password,hash);
  }
  generateAccessToken(payload:object){
    return jwt.sign(payload,process.env.JWT_SECRET||'dev-secret',{expiresIn:'1h'});
  }
}
