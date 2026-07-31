import {Router} from 'express';
import {createDispatch} from '../services/rideDispatch.service';
const r=Router();
r.post('/',(req,res)=>{
 const out=createDispatch(req.body.origin,req.body.drivers||[]);
 if(!out) return res.status(409).json({message:'No available driver'});
 res.status(201).json(out);
});
export default r;
