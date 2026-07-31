import {Request,Response} from 'express';
import {PrismaBookingRepository} from '../repositories/PrismaBookingRepository';

const repo=new PrismaBookingRepository();

export class BookingController{
  list=async(_req:Request,res:Response)=>res.json(await repo.findAll());

  create=async(req:Request,res:Response)=>{
    res.status(201).json(await repo.create(req.body));
  };

  update=async(req:Request,res:Response)=>{
    res.json(await repo.update(req.params.id,req.body));
  };

  remove=async(req:Request,res:Response)=>{
    await repo.delete(req.params.id);
    res.status(204).send();
  };
}
