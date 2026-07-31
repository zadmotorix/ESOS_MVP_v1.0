"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlCenter_service_1 = require("../services/controlCenter.service");
const r = (0, express_1.Router)();
r.get('/incidents', (_q, s) => s.json((0, controlCenter_service_1.list)()));
r.get('/summary', (_q, s) => s.json((0, controlCenter_service_1.summary)()));
exports.default = r;
