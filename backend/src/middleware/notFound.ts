import {Request,Response} from 'express';
export default function(_req:Request,res:Response){
  res.status(404).json({error:'Route not found'});
}
