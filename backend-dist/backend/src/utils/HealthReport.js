"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHealthReport = buildHealthReport;
function buildHealthReport() {
    return {
        api: 'healthy',
        database: 'pending',
        cache: 'pending',
        websocket: 'pending',
        generatedAt: new Date().toISOString()
    };
}
