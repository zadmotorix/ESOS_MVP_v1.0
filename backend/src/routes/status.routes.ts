import {Router} from 'express';
import {ApiResponse} from '../utils/ApiResponse';

const router=Router();

router.get('/',(_req,res)=>{
  res.json(ApiResponse.success({
    service:'ESOS API',
    version:'1.0.0',
    environment:process.env.NODE_ENV||'development',
    timestamp:new Date().toISOString()
  }));
});

export default router;
