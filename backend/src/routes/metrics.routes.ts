import { Router } from 'express';
import { getServiceMetrics } from '../health/metrics';

const router = Router();

router.get('/', (_req, res) => {
  res.json(getServiceMetrics());
});

export default router;
