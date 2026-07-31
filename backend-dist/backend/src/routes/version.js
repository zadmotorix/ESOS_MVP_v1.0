"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionRoute = versionRoute;
function versionRoute(req, res) {
    res.json({
        name: 'ESOS API',
        version: '1.0.0',
        apiVersion: 'v1'
    });
}
