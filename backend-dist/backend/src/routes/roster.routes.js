"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roster_service_1 = require("../services/roster.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, roster_service_1.all)()));
exports.default = r;
