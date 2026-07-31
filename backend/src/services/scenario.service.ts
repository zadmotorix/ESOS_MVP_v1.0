import scenarios from '../../../config/scenarios.json';
export const list=()=>scenarios;
export const get=(name:string)=>(scenarios as any)[name]||null;
