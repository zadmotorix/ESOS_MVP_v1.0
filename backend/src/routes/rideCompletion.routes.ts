import {Router} from 'express';
import {completeRide} from '../services/rideDispatch.service';
const r=Router();
r.post('/',(req,res)=>{
  res.json(completeRide(req.body.driverId));
});
export default r;
