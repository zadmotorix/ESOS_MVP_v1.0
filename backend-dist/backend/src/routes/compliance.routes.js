"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compliance_service_1 = require("../services/compliance.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, compliance_service_1.checks)()));
exports.default = r;
