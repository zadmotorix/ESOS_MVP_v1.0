"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = void 0;
const create = (a, i) => [...a, i];
exports.create = create;
const update = (a, idx, i) => a.map((x, n) => n === idx ? i : x);
exports.update = update;
const remove = (a, idx) => a.filter((_, n) => n !== idx);
exports.remove = remove;
