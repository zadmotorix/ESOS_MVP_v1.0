export const securityConfig = {
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
