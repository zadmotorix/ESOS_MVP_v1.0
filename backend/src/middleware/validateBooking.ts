import {Request,Response,NextFunction} from 'express';

export function validateBooking(req:Request,res:Response,next:NextFunction){
  const {customer,pickup,destination}=req.body;
  if(!customer||!pickup||!destination){
    return res.status(400).json({message:'customer, pickup and destination are required'});
  }
  next();
}
