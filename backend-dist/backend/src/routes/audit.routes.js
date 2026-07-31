"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audit_service_1 = require("../services/audit.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, audit_service_1.logs)()));
exports.default = r;
