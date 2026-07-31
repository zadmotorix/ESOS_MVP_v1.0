"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.recordRide = recordRide;
exports.all = all;
const customers = new Map();
function add(c) {
    customers.set(c.id, { ...c, rides: 0, spent: 0, history: [] });
}
function recordRide(customerId, ride) {
    const c = customers.get(customerId);
    if (!c)
        return null;
    c.rides++;
    c.spent += Number(ride.fare || 0);
    c.history.push(ride);
    return c;
}
function all() { return [...customers.values()]; }
