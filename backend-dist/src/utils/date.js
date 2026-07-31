"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (d = new Date()) => d.toISOString().slice(0, 10);
exports.formatDate = formatDate;
