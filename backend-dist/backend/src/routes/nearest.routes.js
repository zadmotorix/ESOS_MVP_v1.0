"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geo_service_1 = require("../services/geo.service");
const r = (0, express_1.Router)();
r.post('/', (req, res) => {
    const { origin, drivers = [] } = req.body;
    res.json((0, geo_service_1.nearest)(origin, drivers));
});
exports.default = r;
