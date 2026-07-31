import {Router} from 'express';
import {recordRide,setResources,getStats} from '../services/analytics.service';
const r=Router();
r.get('/',(_q,res)=>res.json(getStats()));
r.post('/record',(req,res)=>{recordRide(+req.body.fare||0,+req.body.time||0);res.json(getStats());});
r.post('/resources',(req,res)=>{setResources(+req.body.fleet||0,+req.body.activeFleet||0,+req.body.drivers||0,+req.body.activeDrivers||0);res.json(getStats());});
export default r;
