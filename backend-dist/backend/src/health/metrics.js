"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceMetrics = getServiceMetrics;
function getServiceMetrics() {
    return {
        uptimeSeconds: Math.floor(process.uptime()),
        timestamp: new Date().toISOString()
    };
}
