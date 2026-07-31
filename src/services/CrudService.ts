export const create=<T,>(a:T[],i:T)=>[...a,i];
export const update=<T,>(a:T[],idx:number,i:T)=>a.map((x,n)=>n===idx?i:x);
export const remove=<T,>(a:T[],idx:number)=>a.filter((_,n)=>n!==idx);
