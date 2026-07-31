"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = save;
exports.load = load;
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function load(key) { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }
