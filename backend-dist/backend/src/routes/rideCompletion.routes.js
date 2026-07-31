"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rideDispatch_service_1 = require("../services/rideDispatch.service");
const r = (0, express_1.Router)();
r.post('/', (req, res) => {
    res.json((0, rideDispatch_service_1.completeRide)(req.body.driverId));
});
exports.default = r;
