"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startupDiagnostics = startupDiagnostics;
function startupDiagnostics() {
    return { status: 'OK', checks: ['config', 'routes', 'middleware'] };
}
