"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reports_service_1 = require("../services/reports.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, reports_service_1.reports)()));
exports.default = r;
