import { Router } from 'express';

const router = Router();

router.get('/',(_req,res)=>{
  res.json({status:'ok',service:'esos-api'});
});

export const healthRoute = router;
export default router;
