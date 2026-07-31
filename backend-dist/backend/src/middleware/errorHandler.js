"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(err, _req, res, _next) {
    res.status(err?.status || 500).json({ error: err?.message || 'Internal Server Error' });
}
