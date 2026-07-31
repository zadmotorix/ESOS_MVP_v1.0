"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordRide = recordRide;
exports.setResources = setResources;
exports.getStats = getStats;
const stats = { rides: 0, completed: 0, totalFare: 0, totalMinutes: 0, fleet: 0, activeFleet: 0, drivers: 0, activeDrivers: 0 };
function recordRide(fare, time = 0) {
    stats.rides++;
    stats.completed++;
    stats.totalFare += fare;
    stats.totalMinutes += time;
}
function setResources(fleet, activeFleet, drivers, activeDrivers) {
    Object.assign(stats, { fleet, activeFleet, drivers, activeDrivers });
}
function getStats() {
    return {
        ...stats,
        avgFare: stats.completed ? stats.totalFare / stats.completed : 0,
        avgTripTime: stats.completed ? stats.totalMinutes / stats.completed : 0,
        completionRate: stats.rides ? stats.completed / stats.rides : 0,
        fleetUtilization: stats.fleet ? stats.activeFleet / stats.fleet : 0,
        driverUtilization: stats.drivers ? stats.activeDrivers / stats.drivers : 0
    };
}
