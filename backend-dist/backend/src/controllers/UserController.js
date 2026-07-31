"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const service = new UserService_1.UserService();
class UserController {
    async profile(req, res) { res.json(await service.profile(req.params.id)); }
}
exports.UserController = UserController;
