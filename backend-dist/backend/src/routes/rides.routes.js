"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rideState_service_1 = require("../services/rideState.service");
const r = (0, express_1.Router)();
r.post('/advance', (req, res) => {
    const state = req.body?.state || 'CREATED';
    res.json({ previous: state, current: (0, rideState_service_1.nextState)(state) });
});
exports.default = r;
