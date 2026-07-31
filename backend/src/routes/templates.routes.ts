import {Router} from 'express';
import {all} from '../services/template.service';
const r=Router();
r.get('/',(_q,s)=>s.json(all()));
export default r;
