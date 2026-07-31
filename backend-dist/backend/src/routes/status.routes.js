"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ApiResponse_1 = require("../utils/ApiResponse");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json(ApiResponse_1.ApiResponse.success({
        service: 'ESOS API',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    }));
});
exports.default = router;
