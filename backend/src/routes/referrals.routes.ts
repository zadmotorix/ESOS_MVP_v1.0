import {Router} from 'express';
import {getReferral,redeemReferral} from '../services/referral.service';
const r=Router();
r.get('/:customerId',(q,s)=>s.json(getReferral(q.params.customerId)));
r.post('/redeem',(q,s)=>s.json(redeemReferral(q.body.customerId)));
export default r;
