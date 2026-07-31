"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_service_1 = require("../services/dashboard.service");
const r = (0, express_1.Router)();
r.get('/', (_q, res) => res.json((0, dashboard_service_1.dashboard)()));
r.post('/record', (req, res) => { const b = req.body; (0, dashboard_service_1.recordDashboard)(b.day, b.driverId, b.vehicleId, +b.fare || 0); res.json((0, dashboard_service_1.dashboard)()); });
exports.default = r;
