"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analytics_service_1 = require("../services/analytics.service");
const r = (0, express_1.Router)();
r.get('/', (_q, res) => res.json((0, analytics_service_1.getStats)()));
r.post('/record', (req, res) => { (0, analytics_service_1.recordRide)(+req.body.fare || 0, +req.body.time || 0); res.json((0, analytics_service_1.getStats)()); });
r.post('/resources', (req, res) => { (0, analytics_service_1.setResources)(+req.body.fleet || 0, +req.body.activeFleet || 0, +req.body.drivers || 0, +req.body.activeDrivers || 0); res.json((0, analytics_service_1.getStats)()); });
exports.default = r;
