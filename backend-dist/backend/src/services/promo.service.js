"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = apply;
const coupons = { WELCOME10: 10, PET20: 20 };
function apply(code, total) {
    const pct = coupons[code] || 0;
    const discount = +(total * pct / 100).toFixed(2);
    return { code, discount, finalAmount: +(total - discount).toFixed(2) };
}
