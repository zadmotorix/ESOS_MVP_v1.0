"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAction = logAction;
function logAction(action) {
    const logs = JSON.parse(localStorage.getItem('auditLogs') || '[]');
    logs.push({ action, time: new Date().toISOString() });
    localStorage.setItem('auditLogs', JSON.stringify(logs));
}
