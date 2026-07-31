"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const realtime_service_1 = require("../services/realtime.service");
const r = (0, express_1.Router)();
r.post('/event', (req, res) => {
    (0, realtime_service_1.publish)(req.body?.event || 'ride.update', req.body || {});
    res.json({ published: true });
});
exports.default = r;
