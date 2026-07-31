import {nearest} from './geo.service';

const reserved=new Set<string>();

export function createDispatch(origin:any,drivers:any[]){
 const c=drivers.filter((d:any)=>!reserved.has(d.driverId)&&d.status==='available');
 const pick=nearest(origin,c);
 if(!pick) return null;
 reserved.add(pick.driverId);
 return {
  rideId:'R'+Date.now(),
  driverId:pick.driverId,
  distanceKm:Number(pick.distance.toFixed(2)),
  status:'DISPATCHED'
 };
}


export function completeRide(driverId:string){
  reserved.delete(driverId);
  return {driverId,status:'COMPLETED',released:true};
}
