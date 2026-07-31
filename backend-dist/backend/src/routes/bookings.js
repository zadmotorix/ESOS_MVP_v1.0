"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsRoutes = void 0;
exports.bookingsRoutes = {
    list: (req, res) => res.json([]),
    create: (req, res) => res.status(201).json({ message: 'Booking endpoint placeholder' })
};
