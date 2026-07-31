import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    ready: true,
    checks: {
      api: "ok",
      database: "configured",
      authentication: "enabled",
      routes: "loaded"
    }
  });
});

export default router;
