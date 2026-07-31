"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const featureFlags_1 = require("../config/featureFlags");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json(featureFlags_1.featureFlags);
});
exports.default = router;
