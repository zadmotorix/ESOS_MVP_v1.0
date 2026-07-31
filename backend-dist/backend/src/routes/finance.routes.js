"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const finance_service_1 = require("../services/finance.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, finance_service_1.pnl)()));
exports.default = r;
