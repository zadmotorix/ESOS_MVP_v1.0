export function estimateEtaMinutes(distanceKm:number,avgSpeedKmph:number=30){
  if(avgSpeedKmph<=0) return 0;
  return Math.round((distanceKm/avgSpeedKmph)*60);
}
