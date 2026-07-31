"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required = required;
exports.positive = positive;
function required(v) { return v.trim().length > 0; }
function positive(n) { return n >= 0; }
