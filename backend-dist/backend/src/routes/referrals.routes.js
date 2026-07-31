"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const referral_service_1 = require("../services/referral.service");
const r = (0, express_1.Router)();
r.get('/:customerId', (q, s) => s.json((0, referral_service_1.getReferral)(q.params.customerId)));
r.post('/redeem', (q, s) => s.json((0, referral_service_1.redeemReferral)(q.body.customerId)));
exports.default = r;
