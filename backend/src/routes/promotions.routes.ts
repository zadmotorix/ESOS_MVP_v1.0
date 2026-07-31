import {Router} from 'express';
import {apply} from '../services/promo.service';
const r=Router();
r.post('/apply',(req,res)=>res.json(apply(req.body.code,+req.body.total||0)));
export default r;
