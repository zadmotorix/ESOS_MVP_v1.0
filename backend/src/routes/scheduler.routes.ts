import {Router} from 'express';
import {getTimeline,current} from '../services/scheduler.service';

const r=Router();

r.get('/timeline',(_q,s)=>s.json(getTimeline()));
r.get('/current/:hour',(q,s)=>s.json(current(Number(q.params.hour))));

export default r;
