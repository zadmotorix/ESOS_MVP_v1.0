import {Router} from 'express';

const router=Router();

// Temporary in-memory assignment endpoint.
// Replace with persistent repository implementation later.

router.post('/',(req,res)=>{
  const {driverId,vehicleId}=req.body||{};
  if(!driverId||!vehicleId){
    return res.status(400).json({message:'driverId and vehicleId required'});
  }
  return res.json({
    assigned:true,
    driverId,
    vehicleId
  });
});

export default router;
