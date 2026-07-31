export const utilization=(active:number,total:number)=> total?Math.round(active/total*100):0;
