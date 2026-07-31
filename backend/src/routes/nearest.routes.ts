import {Router} from 'express';
import {nearest} from '../services/geo.service';
const r=Router();
r.post('/',(req,res)=>{
 const {origin,drivers=[]}=req.body;
 res.json(nearest(origin,drivers));
});
export default r;
