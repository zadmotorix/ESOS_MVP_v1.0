export interface FleetVehicle {
  id: string;
  registrationNumber: string;
  driverId?: string;
  status: 'available'|'busy'|'offline';
  vehicleType: string;
}
