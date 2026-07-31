"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatch = dispatch;
function dispatch(drivers, vehicles) {
    const d = drivers.find(x => x.status === 'available');
    const v = vehicles.find(x => x.status === 'available');
    if (!d || !v)
        return null;
    d.status = 'on_trip';
    v.status = 'busy';
    return { driverId: d.id, vehicleId: v.id };
}
