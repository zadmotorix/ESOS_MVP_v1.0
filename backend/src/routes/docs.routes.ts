import {Router} from 'express';
import {openApiInfo} from '../config/openapi';

const router=Router();

router.get('/openapi.json',(_req,res)=>{
  res.json(openApiInfo);
});

export default router;
