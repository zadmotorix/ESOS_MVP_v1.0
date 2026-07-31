import {Router} from 'express';
import * as c from '../services/customer.service';
const r=Router();
r.get('/',(_q,res)=>res.json(c.all()));
r.post('/',(req,res)=>{c.add(req.body);res.status(201).json(req.body);});
r.post('/:id/rides',(req,res)=>{
 const x=c.recordRide(req.params.id,req.body);
 if(!x) return res.status(404).json({message:'Customer not found'});
 res.json({rides:x.rides,spent:x.spent,clv:x.spent,history:x.history});
});
export default r;
