import { readiness } from '../health/readiness';
export function readinessRoute(req:any,res:any){
  res.json(readiness());
}
