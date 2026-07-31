const accounts=new Map<string,{points:number}>();

function acct(id:string){
 if(!accounts.has(id)) accounts.set(id,{points:0});
 return accounts.get(id)!;
}
export function award(id:string,fare:number){
 const a=acct(id);
 a.points+=Math.floor(fare/10);
 const tier=a.points>=1000?'PLATINUM':a.points>=500?'GOLD':'SILVER';
 return {points:a.points,tier};
}
export function redeem(id:string,points:number){
 const a=acct(id);
 if(points>a.points) return {success:false,points:a.points};
 a.points-=points;
 return {success:true,points:a.points};
}
