import { Router } from 'express';
import { featureFlags } from '../config/featureFlags';

const router = Router();

router.get('/', (_req, res) => {
  res.json(featureFlags);
});

export default router;
