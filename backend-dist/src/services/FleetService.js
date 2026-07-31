"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilization = void 0;
const utilization = (active, total) => total ? Math.round(active / total * 100) : 0;
exports.utilization = utilization;
