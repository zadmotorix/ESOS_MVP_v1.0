import {Router} from 'express';
import {calculateFare} from '../services/fare.service';
const r=Router();
r.get('/',(req,res)=>{
 const d=Number(req.query.distance||0);
 const w=Number(req.query.wait||0);
 res.json(calculateFare(d,w));
});
export default r;
