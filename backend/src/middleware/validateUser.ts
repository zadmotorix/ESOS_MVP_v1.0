import {Request,Response,NextFunction} from 'express';

export function validateUser(req:Request,res:Response,next:NextFunction){
  const {name,email,password} = req.body;
  if(!name || !email || !password){
    return res.status(400).json({success:false,message:'name, email and password are required'});
  }
  next();
}
