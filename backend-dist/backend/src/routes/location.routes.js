"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const r = (0, express_1.Router)();
const locations = new Map();
r.post('/', (req, res) => {
    const b = req.body;
    locations.set(b.driverId, b);
    res.json({ updated: true });
});
r.get('/:driverId', (req, res) => {
    res.json(locations.get(req.params.driverId) || null);
});
exports.default = r;
