"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unix = exports.nowIso = void 0;
const nowIso = () => new Date().toISOString();
exports.nowIso = nowIso;
const unix = () => Date.now();
exports.unix = unix;
