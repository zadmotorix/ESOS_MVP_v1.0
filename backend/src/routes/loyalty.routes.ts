import {Router} from 'express';
import {award,redeem} from '../services/loyalty.service';
const r=Router();
r.post('/award',(q,s)=>s.json(award(q.body.customerId,+q.body.fare||0)));
r.post('/redeem',(q,s)=>s.json(redeem(q.body.customerId,+q.body.points||0)));
export default r;
