import {Express} from 'express';
import health from './health.routes';
import orchestrator from './orchestrator.routes';

export function registerRoutes(app:Express){
  app.use('/health',health);
  app.use('/orchestrator',orchestrator);
}
