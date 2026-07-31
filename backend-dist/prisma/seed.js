"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed() {
    return {
        users: 10, customerProfiles: 10, drivers: 8, vehicles: 5,
        fleets: 2, vendors: 6, subscriptions: 3, notifications: 50,
        bookings: 25, rides: 20,
        initialized: true
    };
}
