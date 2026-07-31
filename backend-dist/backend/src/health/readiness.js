"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readiness = readiness;
function readiness() {
    return {
        api: true,
        database: false,
        websocket: false,
        timestamp: new Date().toISOString()
    };
}
