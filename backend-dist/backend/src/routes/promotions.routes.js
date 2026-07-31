"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promo_service_1 = require("../services/promo.service");
const r = (0, express_1.Router)();
r.post('/apply', (req, res) => res.json((0, promo_service_1.apply)(req.body.code, +req.body.total || 0)));
exports.default = r;
