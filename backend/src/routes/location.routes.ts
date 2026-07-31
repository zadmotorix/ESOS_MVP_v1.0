import {Router} from 'express';
const r=Router();
const locations=new Map();

r.post('/',(req,res)=>{
 const b=req.body;
 locations.set(b.driverId,b);
 res.json({updated:true});
});

r.get('/:driverId',(req,res)=>{
 res.json(locations.get(req.params.driverId)||null);
});

export default r;
