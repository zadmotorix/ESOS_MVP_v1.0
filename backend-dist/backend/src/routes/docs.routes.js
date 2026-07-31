"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openapi_1 = require("../config/openapi");
const router = (0, express_1.Router)();
router.get('/openapi.json', (_req, res) => {
    res.json(openapi_1.openApiInfo);
});
exports.default = router;
