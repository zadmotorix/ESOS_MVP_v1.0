"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AuthService {
    async hashPassword(password) {
        return bcryptjs_1.default.hash(password, 10);
    }
    async verifyPassword(password, hash) {
        return bcryptjs_1.default.compare(password, hash);
    }
    generateAccessToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
    }
}
exports.AuthService = AuthService;
