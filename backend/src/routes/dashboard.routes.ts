import {Router} from 'express';
import {recordDashboard,dashboard} from '../services/dashboard.service';
const r=Router();
r.get('/',(_q,res)=>res.json(dashboard()));
r.post('/record',(req,res)=>{const b=req.body;recordDashboard(b.day,b.driverId,b.vehicleId,+b.fare||0);res.json(dashboard());});
export default r;
