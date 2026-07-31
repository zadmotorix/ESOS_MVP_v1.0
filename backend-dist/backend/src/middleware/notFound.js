"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(_req, res) {
    res.status(404).json({ error: 'Route not found' });
}
