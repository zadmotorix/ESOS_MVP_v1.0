"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferral = getReferral;
exports.redeemReferral = redeemReferral;
const refs = new Map();
function acc(id) {
    if (!refs.has(id))
        refs.set(id, { code: "REF" + id.slice(0, 6).toUpperCase(), rewards: 0, invites: 0 });
    return refs.get(id);
}
function getReferral(id) { return acc(id); }
function redeemReferral(id) {
    const r = acc(id);
    r.invites++;
    r.rewards += 50;
    return r;
}
