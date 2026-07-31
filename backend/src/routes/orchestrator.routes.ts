import {Router} from 'express';
import * as o from '../services/orchestrator.service';
const r=Router();
r.get('/status',(_q,s)=>s.json(o.status()));
r.post('/start',(_q,s)=>s.json(o.start()));
r.post('/pause',(_q,s)=>s.json(o.pause()));
r.post('/reset',(_q,s)=>s.json(o.reset()));
r.post('/step',(_q,s)=>s.json(o.step()));
export default r;
