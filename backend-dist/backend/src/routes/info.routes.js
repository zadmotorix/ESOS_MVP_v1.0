"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const version_1 = require("../config/version");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        application: version_1.VERSION.name,
        version: version_1.VERSION.version,
        apiVersion: version_1.VERSION.apiVersion,
        node: process.version
    });
});
exports.default = router;
