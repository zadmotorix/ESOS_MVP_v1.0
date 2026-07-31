import {Router} from 'express';
import {SessionController} from '../controllers/SessionController';

const router = Router();
const controller = new SessionController();

router.post('/refresh',(req,res)=>controller.refresh(req,res));

export default router;
