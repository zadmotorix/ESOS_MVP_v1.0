"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
exports.canAccess = canAccess;
exports.permissions = {
    Administrator: ['*'],
    'Strategy & Operations Consultant': ['dashboard', 'operations', 'crm', 'reports']
};
function canAccess(role, feature) {
    const p = exports.permissions[role] || [];
    return p.includes('*') || p.includes(feature);
}
