"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate = void 0;
const simulate = (base = 250) => ({ base, surge: 1.4, total: base * 1.4 });
exports.simulate = simulate;
