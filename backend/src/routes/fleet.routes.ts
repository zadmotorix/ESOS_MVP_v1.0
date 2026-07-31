import {Router} from 'express';
const router=Router();
const fleet:any[]=[];
router.get('/',(_q,res)=>res.json(fleet));
router.post('/',(req,res)=>{fleet.push(req.body);res.status(201).json(req.body);});
export default router;
