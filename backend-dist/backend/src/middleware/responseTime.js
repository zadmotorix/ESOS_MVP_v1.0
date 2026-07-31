"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTime = responseTime;
function responseTime(req, res, next) {
    const start = Date.now();
    const end = res.end;
    res.end = function (...args) {
        res.setHeader?.('X-Response-Time', `${Date.now() - start}ms`);
        return end.apply(this, args);
    };
    next();
}
