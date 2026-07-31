"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDispatch = createDispatch;
exports.completeRide = completeRide;
const geo_service_1 = require("./geo.service");
const reserved = new Set();
function createDispatch(origin, drivers) {
    const c = drivers.filter((d) => !reserved.has(d.driverId) && d.status === 'available');
    const pick = (0, geo_service_1.nearest)(origin, c);
    if (!pick)
        return null;
    reserved.add(pick.driverId);
    return {
        rideId: 'R' + Date.now(),
        driverId: pick.driverId,
        distanceKm: Number(pick.distance.toFixed(2)),
        status: 'DISPATCHED'
    };
}
function completeRide(driverId) {
    reserved.delete(driverId);
    return { driverId, status: 'COMPLETED', released: true };
}
