"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const TokenService_1 = require("../services/TokenService");
const tokens = new TokenService_1.TokenService();
class SessionController {
    refresh(req, res) {
        const { refreshToken } = req.body;
        if (!refreshToken)
            return res.status(400).json({ message: 'refreshToken required' });
        const payload = tokens.verify(refreshToken);
        res.json({ accessToken: tokens.generateAccessToken(payload) });
    }
}
exports.SessionController = SessionController;
