import {Router} from 'express';
import {send,history} from '../services/notification.service';
const r=Router();
r.get('/',(_q,s)=>s.json(history()));
r.post('/send',(q,s)=>s.json(send(q.body.channel,q.body.to,q.body.message)));
export default r;
