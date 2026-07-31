"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    async findById(id) { return { id, name: 'Demo User' }; }
}
exports.UserRepository = UserRepository;
