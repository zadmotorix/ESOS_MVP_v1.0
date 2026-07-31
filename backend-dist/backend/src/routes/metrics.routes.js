"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metrics_1 = require("../health/metrics");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json((0, metrics_1.getServiceMetrics)());
});
exports.default = router;
