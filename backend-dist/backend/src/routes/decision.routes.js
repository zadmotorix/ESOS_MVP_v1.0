"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const decisionEngine_service_1 = require("../services/decisionEngine.service");
const r = (0, express_1.Router)();
r.post('/evaluate', (req, res) => res.json((0, decisionEngine_service_1.evaluate)(req.body)));
exports.default = r;
