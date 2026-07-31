"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.award = award;
exports.redeem = redeem;
const accounts = new Map();
function acct(id) {
    if (!accounts.has(id))
        accounts.set(id, { points: 0 });
    return accounts.get(id);
}
function award(id, fare) {
    const a = acct(id);
    a.points += Math.floor(fare / 10);
    const tier = a.points >= 1000 ? 'PLATINUM' : a.points >= 500 ? 'GOLD' : 'SILVER';
    return { points: a.points, tier };
}
function redeem(id, points) {
    const a = acct(id);
    if (points > a.points)
        return { success: false, points: a.points };
    a.points -= points;
    return { success: true, points: a.points };
}
