"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = validateUser;
function validateUser(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'name, email and password are required' });
    }
    next();
}
