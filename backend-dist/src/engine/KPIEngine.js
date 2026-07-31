"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultKPI = void 0;
exports.applyDecision = applyDecision;
exports.defaultKPI = { customerSatisfaction: 95, fleetUtilization: 82, revenue: 0, safety: 100 };
function applyDecision(k, key, delta) { return { ...k, [key]: k[key] + delta }; }
