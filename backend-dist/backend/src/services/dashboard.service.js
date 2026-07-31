"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordDashboard = recordDashboard;
exports.dashboard = dashboard;
const revenueByDay = {};
const driverTrips = {};
const vehicleTrips = {};
function recordDashboard(day, driverId, vehicleId, fare) {
    revenueByDay[day] = (revenueByDay[day] || 0) + fare;
    driverTrips[driverId] = (driverTrips[driverId] || 0) + 1;
    vehicleTrips[vehicleId] = (vehicleTrips[vehicleId] || 0) + 1;
}
function dashboard() {
    return { revenueByDay, driverTrips, vehicleTrips };
}
