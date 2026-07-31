import {Router} from 'express';
import {getState,update,randomEvent} from '../services/simulationEngine.service';
const r=Router();
r.get('/state',(_q,s)=>s.json(getState()));
r.post('/state',(q,s)=>s.json(update(q.body)));
r.get('/event',(_q,s)=>s.json({event:randomEvent()}));
export default r;
