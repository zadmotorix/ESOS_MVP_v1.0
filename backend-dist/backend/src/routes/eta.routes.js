"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eta_service_1 = require("../services/eta.service");
const r = (0, express_1.Router)();
r.get('/', (req, res) => {
    const d = Number(req.query.distance || 0);
    const s = Number(req.query.speed || 30);
    res.json({ etaMinutes: (0, eta_service_1.estimateEtaMinutes)(d, s) });
});
exports.default = r;
