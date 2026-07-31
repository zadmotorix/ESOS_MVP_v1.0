export interface Driver{
 id:string;
 name:string;
 phone:string;
 status:'available'|'on_trip'|'offline';
 vehicleId?:string;
}
