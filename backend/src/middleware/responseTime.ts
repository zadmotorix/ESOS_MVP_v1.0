export function responseTime(req:any,res:any,next:any){
 const start=Date.now();
 const end=res.end;
 res.end=function(...args:any[]){
   res.setHeader?.('X-Response-Time',`${Date.now()-start}ms`);
   return end.apply(this,args);
 };
 next();
}
