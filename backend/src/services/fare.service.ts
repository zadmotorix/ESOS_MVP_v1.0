const BASE=50, PER_KM=20, WAIT_PER_MIN=2, AVG_SPEED_KMPH=30;

export function calculateFare(distanceKm:number, waitingMin:number=0){
  const travelTimeMin=(distanceKm/AVG_SPEED_KMPH)*60;
  return {
    base:BASE,
    distance:distanceKm*PER_KM,
    waiting:waitingMin*WAIT_PER_MIN,
    time:Math.round((travelTimeMin+waitingMin)*10)/10,
    total:BASE+distanceKm*PER_KM+waitingMin*WAIT_PER_MIN
  };
}
