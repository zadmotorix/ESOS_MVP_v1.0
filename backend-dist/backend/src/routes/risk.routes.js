"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const risk_service_1 = require("../services/risk.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, risk_service_1.register)()));
exports.default = r;
