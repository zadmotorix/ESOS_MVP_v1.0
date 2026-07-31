"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardSimulator_service_1 = require("../services/dashboardSimulator.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, dashboardSimulator_service_1.snapshot)()));
exports.default = r;
