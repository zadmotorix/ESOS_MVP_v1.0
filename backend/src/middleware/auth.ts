import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export function authenticate(req:Request,res:Response,next:NextFunction){
  const token=req.headers.authorization?.replace('Bearer ','');
  if(!token) return res.status(401).json({message:'Unauthorized'});
  try{
    (req as any).user=jwt.verify(token,process.env.JWT_SECRET||'dev-secret');
    next();
  }catch{
    res.status(401).json({message:'Invalid token'});
  }
}
