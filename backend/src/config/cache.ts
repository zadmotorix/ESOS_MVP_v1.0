export const cacheConfig = {
  provider: process.env.CACHE_PROVIDER || "memory",
  ttlSeconds: Number(process.env.CACHE_TTL || 300)
};
