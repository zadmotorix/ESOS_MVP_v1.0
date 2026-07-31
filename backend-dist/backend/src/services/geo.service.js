"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haversineKm = haversineKm;
exports.nearest = nearest;
function haversineKm(a, b) {
    const R = 6371, d2r = Math.PI / 180;
    const dLat = (b.latitude - a.latitude) * d2r;
    const dLon = (b.longitude - a.longitude) * d2r;
    const s = Math.sin(dLat / 2) ** 2 +
        Math.cos(a.latitude * d2r) * Math.cos(b.latitude * d2r) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}
function nearest(origin, drivers) {
    return drivers.reduce((best, d) => {
        const dist = haversineKm(origin, d);
        return !best || dist < best.distance ? { driverId: d.driverId, distance: dist } : best;
    }, null);
}
