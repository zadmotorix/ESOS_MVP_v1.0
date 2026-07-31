"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const r = (0, express_1.Router)();
const drivers = [];
r.get('/', (_q, res) => res.json(drivers));
r.post('/', (req, res) => { drivers.push(req.body); res.status(201).json(req.body); });
exports.default = r;
