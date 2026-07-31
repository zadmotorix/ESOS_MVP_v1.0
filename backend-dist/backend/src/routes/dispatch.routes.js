"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dispatch_service_1 = require("../services/dispatch.service");
const r = (0, express_1.Router)();
r.post('/', (_req, res) => {
    const out = (0, dispatch_service_1.dispatch)([{ id: 'D1', status: 'available' }], [{ id: 'V1', status: 'available' }]);
    if (!out)
        return res.status(409).json({ message: 'No resources' });
    res.json(out);
});
exports.default = r;
