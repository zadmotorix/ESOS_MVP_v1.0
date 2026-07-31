"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    generateAccessToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
    }
    generateRefreshToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
    }
    verify(token) {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'dev-secret');
    }
}
exports.TokenService = TokenService;
