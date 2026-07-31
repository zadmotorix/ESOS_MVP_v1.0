"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRoute = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({ status: 'ok', service: 'esos-api' });
});
exports.healthRoute = router;
exports.default = router;
