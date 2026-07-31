"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.validateEnv = validateEnv;
exports.env = {
    PORT: Number(process.env.PORT || 3000),
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'file:./esos.db'
};
function validateEnv() {
    const required = ["DATABASE_URL"];
    return required.filter(k => !process.env[k]);
}
