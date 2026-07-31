"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBooking = validateBooking;
function validateBooking(req, res, next) {
    const { customer, pickup, destination } = req.body;
    if (!customer || !pickup || !destination) {
        return res.status(400).json({ message: 'customer, pickup and destination are required' });
    }
    next();
}
