export interface Point{latitude:number;longitude:number;}
export function haversineKm(a:Point,b:Point){
 const R=6371,d2r=Math.PI/180;
 const dLat=(b.latitude-a.latitude)*d2r;
 const dLon=(b.longitude-a.longitude)*d2r;
 const s=Math.sin(dLat/2)**2+
 Math.cos(a.latitude*d2r)*Math.cos(b.latitude*d2r)*Math.sin(dLon/2)**2;
 return 2*R*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));
}
export function nearest(origin:Point,drivers:any[]){
 return drivers.reduce((best,d)=>{
  const dist=haversineKm(origin,d);
  return !best||dist<best.distance?{driverId:d.driverId,distance:dist}:best;
 },null);
}
