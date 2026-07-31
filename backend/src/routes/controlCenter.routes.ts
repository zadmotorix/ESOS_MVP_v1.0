import {Router} from 'express';
import {list,summary} from '../services/controlCenter.service';
const r=Router();
r.get('/incidents',(_q,s)=>s.json(list()));
r.get('/summary',(_q,s)=>s.json(summary()));
export default r;
