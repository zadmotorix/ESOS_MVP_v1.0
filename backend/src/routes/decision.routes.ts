import {Router} from 'express';
import {evaluate} from '../services/decisionEngine.service';
const r=Router();
r.post('/evaluate',(req,res)=>res.json(evaluate(req.body)));
export default r;
