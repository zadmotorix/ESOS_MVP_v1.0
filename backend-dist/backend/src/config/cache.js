"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheConfig = void 0;
exports.cacheConfig = {
    provider: process.env.CACHE_PROVIDER || "memory",
    ttlSeconds: Number(process.env.CACHE_TTL || 300)
};
