export interface Driver { id:string; status:'available'|'on_trip'|'offline'; }
export interface Vehicle { id:string; status:'available'|'busy'|'offline'; }

export function dispatch(drivers:Driver[],vehicles:Vehicle[]){
 const d=drivers.find(x=>x.status==='available');
 const v=vehicles.find(x=>x.status==='available');
 if(!d||!v) return null;
 d.status='on_trip';
 v.status='busy';
 return {driverId:d.id,vehicleId:v.id};
}
