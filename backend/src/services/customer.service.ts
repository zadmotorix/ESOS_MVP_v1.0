const customers=new Map<string,any>();

export function add(c:any){
 customers.set(c.id,{...c,rides:0,spent:0,history:[]});
}
export function recordRide(customerId:string,ride:any){
 const c=customers.get(customerId);
 if(!c) return null;
 c.rides++;
 c.spent+=Number(ride.fare||0);
 c.history.push(ride);
 return c;
}
export function all(){return [...customers.values()];}
