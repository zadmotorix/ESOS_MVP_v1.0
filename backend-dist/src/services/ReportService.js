"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyGrowth = monthlyGrowth;
function monthlyGrowth(values) {
    if (values.length < 2)
        return 0;
    const a = values.at(-2) ?? 0, b = values.at(-1) ?? 0;
    return a ? (((b - a) / a) * 100) : 0;
}
