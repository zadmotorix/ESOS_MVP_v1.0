import { Router } from 'express';
import { VERSION } from '../config/version';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    application: VERSION.name,
    version: VERSION.version,
    apiVersion: VERSION.apiVersion,
    node: process.version
  });
});

export default router;
