import {Router} from 'express';
import {estimateEtaMinutes} from '../services/eta.service';
const r=Router();
r.get('/',(req,res)=>{
 const d=Number(req.query.distance||0);
 const s=Number(req.query.speed||30);
 res.json({etaMinutes:estimateEtaMinutes(d,s)});
});
export default r;
