"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fare_service_1 = require("../services/fare.service");
const r = (0, express_1.Router)();
r.get('/', (req, res) => {
    const d = Number(req.query.distance || 0);
    const w = Number(req.query.wait || 0);
    res.json((0, fare_service_1.calculateFare)(d, w));
});
exports.default = r;
