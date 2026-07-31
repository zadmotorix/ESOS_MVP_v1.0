"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityConfig = void 0;
exports.securityConfig = {
    corsOrigin: process.env.CORS_ORIGIN || "*",
    rateLimit: {
        windowMs: 15 * 60 * 1000,
        maxRequests: 100
    },
    headers: {
        hsts: true,
        xContentTypeOptions: true,
        frameguard: "deny"
    }
};
