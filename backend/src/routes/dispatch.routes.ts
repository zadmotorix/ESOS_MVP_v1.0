import {Router} from 'express';
import {dispatch} from '../services/dispatch.service';
const r=Router();
r.post('/',(_req,res)=>{
 const out=dispatch(
 [{id:'D1',status:'available'}],
 [{id:'V1',status:'available'}]
 );
 if(!out) return res.status(409).json({message:'No resources'});
 res.json(out);
});
export default r;
