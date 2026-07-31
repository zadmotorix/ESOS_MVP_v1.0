"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rideDispatch_service_1 = require("../services/rideDispatch.service");
const r = (0, express_1.Router)();
r.post('/', (req, res) => {
    const out = (0, rideDispatch_service_1.createDispatch)(req.body.origin, req.body.drivers || []);
    if (!out)
        return res.status(409).json({ message: 'No available driver' });
    res.status(201).json(out);
});
exports.default = r;
