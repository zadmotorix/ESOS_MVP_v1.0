"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sla_service_1 = require("../services/sla.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, sla_service_1.get)()));
exports.default = r;
