import {Router} from 'express';
import {snapshot} from '../services/dashboardSimulator.service';
const r=Router();
r.get('/',(_q,s)=>s.json(snapshot()));
export default r;
