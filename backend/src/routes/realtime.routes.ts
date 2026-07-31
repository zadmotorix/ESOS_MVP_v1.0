import {Router} from 'express';
import {publish} from '../services/realtime.service';
const r=Router();
r.post('/event',(req,res)=>{
 publish(req.body?.event||'ride.update',req.body||{});
 res.json({published:true});
});
export default r;
