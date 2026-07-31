"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../config/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserService {
    async register(name, email, password, role = 'customer') {
        const hash = await bcryptjs_1.default.hash(password, 10);
        return prisma_1.prisma.user.create({
            data: { name, email, password: hash, role }
        });
    }
    async profile(id) {
        return prisma_1.prisma.user.findUnique({ where: { id: Number(id) } });
    }
    async findByEmail(email) {
        return prisma_1.prisma.user.findUnique({ where: { email } });
    }
}
exports.UserService = UserService;
