"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loyalty_service_1 = require("../services/loyalty.service");
const r = (0, express_1.Router)();
r.post('/award', (q, s) => s.json((0, loyalty_service_1.award)(q.body.customerId, +q.body.fare || 0)));
r.post('/redeem', (q, s) => s.json((0, loyalty_service_1.redeem)(q.body.customerId, +q.body.points || 0)));
exports.default = r;
