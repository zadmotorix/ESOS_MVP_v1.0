import {Router} from 'express';
import {nextState} from '../services/rideState.service';
const r=Router();
r.post('/advance',(req,res)=>{
 const state=req.body?.state||'CREATED';
 res.json({previous:state,current:nextState(state)});
});
export default r;
