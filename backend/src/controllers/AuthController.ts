import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { UserService } from '../services/UserService';

const auth=new AuthService();
const users=new UserService();

export class AuthController{
  async login(req:Request,res:Response){
    const user=await users.findByEmail(req.body.email);
    if(!user) return res.status(401).json({message:'Invalid credentials'});
    const ok=await auth.verifyPassword(req.body.password,user.password);
    if(!ok) return res.status(401).json({message:'Invalid credentials'});
    res.json({accessToken:auth.generateAccessToken({id:user.id,role:user.role})});
  }

  async register(req:Request,res:Response){
    const user=await users.register(req.body.name,req.body.email,req.body.password);
    res.status(201).json({id:user.id,email:user.email});
  }
}
