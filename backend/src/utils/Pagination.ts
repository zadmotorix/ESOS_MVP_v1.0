export interface Page<T>{items:T[];page:number;pageSize:number;total:number;}
export function paginate<T>(items:T[],page=1,pageSize=20):Page<T>{
 const start=(page-1)*pageSize;
 return {items:items.slice(start,start+pageSize),page,pageSize,total:items.length};
}
