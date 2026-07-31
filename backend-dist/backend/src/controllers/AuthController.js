"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
const UserService_1 = require("../services/UserService");
const auth = new AuthService_1.AuthService();
const users = new UserService_1.UserService();
class AuthController {
    async login(req, res) {
        const user = await users.findByEmail(req.body.email);
        if (!user)
            return res.status(401).json({ message: 'Invalid credentials' });
        const ok = await auth.verifyPassword(req.body.password, user.password);
        if (!ok)
            return res.status(401).json({ message: 'Invalid credentials' });
        res.json({ accessToken: auth.generateAccessToken({ id: user.id, role: user.role }) });
    }
    async register(req, res) {
        const user = await users.register(req.body.name, req.body.email, req.body.password);
        res.status(201).json({ id: user.id, email: user.email });
    }
}
exports.AuthController = AuthController;
