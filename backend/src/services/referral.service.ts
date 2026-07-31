const refs=new Map<string,{code:string,rewards:number,invites:number}>();

function acc(id:string){
 if(!refs.has(id)) refs.set(id,{code:"REF"+id.slice(0,6).toUpperCase(),rewards:0,invites:0});
 return refs.get(id)!;
}
export function getReferral(id:string){ return acc(id); }
export function redeemReferral(id:string){
 const r=acc(id);
 r.invites++;
 r.rewards+=50;
 return r;
}
