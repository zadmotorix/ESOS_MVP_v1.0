"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = exports.subscribe = void 0;
const listeners = [];
const subscribe = (fn) => listeners.push(fn);
exports.subscribe = subscribe;
const publish = (event, payload) => listeners.forEach(l => l(event, payload));
exports.publish = publish;
