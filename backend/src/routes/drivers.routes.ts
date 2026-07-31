import {Router} from 'express';
const r=Router();
const drivers:any[]=[];
r.get('/',(_q,res)=>res.json(drivers));
r.post('/',(req,res)=>{drivers.push(req.body);res.status(201).json(req.body);});
export default r;
