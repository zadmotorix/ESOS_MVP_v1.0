"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const fleet = [];
router.get('/', (_q, res) => res.json(fleet));
router.post('/', (req, res) => { fleet.push(req.body); res.status(201).json(req.body); });
exports.default = router;
