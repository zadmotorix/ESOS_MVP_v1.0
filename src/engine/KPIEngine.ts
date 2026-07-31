export type KPI={customerSatisfaction:number;fleetUtilization:number;revenue:number;safety:number};
export const defaultKPI:KPI={customerSatisfaction:95,fleetUtilization:82,revenue:0,safety:100};
export function applyDecision(k:KPI,key:keyof KPI,delta:number){return {...k,[key]:k[key]+delta};}
