export interface VehicleDto{
  id:string;
  registrationNumber:string;
  type:string;
  status:'available'|'busy'|'offline';
}

export interface DriverDto{
  id:string;
  name:string;
  phone:string;
  status:'online'|'offline'|'on_trip';
}
