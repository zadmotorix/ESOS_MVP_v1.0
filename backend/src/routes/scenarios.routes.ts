import {Router} from 'express';
import {list,get} from '../services/scenario.service';
const r=Router();
r.get('/',(_q,s)=>s.json(list()));
r.get('/:name',(q,s)=>s.json(get(q.params.name.toUpperCase())));
export default r;
