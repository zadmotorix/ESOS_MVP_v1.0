import {Router} from 'express';
import {notify} from '../services/eventNotification.service';

const r=Router();

r.post('/notify',(req,res)=>{
 const {event,channel,to}=req.body;
 res.json(notify(event,channel,to));
});

export default r;
