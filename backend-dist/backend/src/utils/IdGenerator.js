"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const generateId = () => `esos_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
exports.generateId = generateId;
