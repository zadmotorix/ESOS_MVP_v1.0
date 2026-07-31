const revenueByDay:Record<string,number>={};
const driverTrips:Record<string,number>={};
const vehicleTrips:Record<string,number>={};

export function recordDashboard(day:string,driverId:string,vehicleId:string,fare:number){
 revenueByDay[day]=(revenueByDay[day]||0)+fare;
 driverTrips[driverId]=(driverTrips[driverId]||0)+1;
 vehicleTrips[vehicleId]=(vehicleTrips[vehicleId]||0)+1;
}
export function dashboard(){
 return {revenueByDay,driverTrips,vehicleTrips};
}
